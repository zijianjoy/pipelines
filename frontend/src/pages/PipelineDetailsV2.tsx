/*
 * Copyright 2018 The Kubeflow Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as JsYaml from 'js-yaml';
import * as React from 'react';
import * as StaticGraphParser from '../lib/StaticGraphParser';
import Button from '@material-ui/core/Button';
import Buttons, { ButtonKeys } from '../lib/Buttons';
import Graph from '../components/Graph';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import MD2Tabs from '../atoms/MD2Tabs';
import Paper from '@material-ui/core/Paper';
import RunUtils from '../lib/RunUtils';
import SidePanel from '../components/SidePanel';
import StaticNodeDetails from '../components/StaticNodeDetails';
import { ApiExperiment } from '../apis/experiment';
import { ApiPipeline, ApiGetTemplateResponse, ApiPipelineVersion } from '../apis/pipeline';
import { Apis } from '../lib/Apis';
import { Page } from './Page';
import { RoutePage, RouteParams, QUERY_PARAMS } from '../components/Router';
import { ToolbarProps } from '../components/Toolbar';
import { URLParser } from '../lib/URLParser';
import { Workflow } from '../../third_party/argo-ui/argo_template';
import { classes, stylesheet } from 'typestyle';
import Editor from '../components/Editor';
import { color, commonCss, padding, fontsize, fonts, zIndex } from '../Css';
import { logger, formatDateString } from '../lib/Utils';
import 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/yaml';
import 'brace/theme/github';
import { Description } from '../components/Description';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { compareGraphEdges, transitiveReduction } from '../lib/StaticGraphParser';
import ReduceGraphSwitch from '../components/ReduceGraphSwitch';
import PipelineIRDialog from './PipelineIRDialog';
import protobuf from 'protobufjs';
import { PipelineJob, PipelineSpec } from 'src/third_party/pipeline_spec';
import StaticCanvas from 'src/graph/StaticCanvas';
import { Elements, Node } from 'react-flow-renderer';
import FlowUtil, { TaskType } from 'src/graph/FlowUtil';
import SubDagNamespace from 'src/graph/SubDagNamespace';

interface PipelineDetailsState {
  graph: dagre.graphlib.Graph | null;
  reducedGraph: dagre.graphlib.Graph | null;
  pipeline: ApiPipeline | null;
  selectedNodeId: string;
  selectedNodeInfo: JSX.Element | null;
  selectedTab: number;
  selectedVersion?: ApiPipelineVersion;
  summaryShown: boolean;
  template?: Workflow;
  templateString?: string;
  versions: ApiPipelineVersion[];
  showReducedGraph: boolean;
  pipelineIR: string;
  pipelineSpec: PipelineSpec | null;
  elements: Elements;
  namespaces: string[];
  isSidePanelOpen: boolean;
}

const summaryCardWidth = 500;

export const css = stylesheet({
  containerCss: {
    $nest: {
      '& .CodeMirror': {
        height: '100%',
        width: '80%',
      },

      '& .CodeMirror-gutters': {
        backgroundColor: '#f7f7f7',
      },
    },
    background: '#f7f7f7',
    height: '100%',
  },
  footer: {
    background: color.graphBg,
    display: 'flex',
    padding: '0 0 20px 20px',
  },
  footerInfoOffset: {
    marginLeft: summaryCardWidth + 40,
  },
  infoSpan: {
    color: color.lowContrast,
    fontFamily: fonts.secondary,
    fontSize: fontsize.small,
    letterSpacing: '0.21px',
    lineHeight: '24px',
    paddingLeft: 6,
  },
  summaryCard: {
    bottom: 20,
    left: 20,
    padding: 10,
    position: 'absolute',
    width: summaryCardWidth,
    zIndex: zIndex.PIPELINE_SUMMARY_CARD,
  },
  summaryKey: {
    color: color.strong,
    marginTop: 10,
  },
});

// 1. A button to upload pipeline V2 IR json
// 2.a Protoc pipeline IR to a js client.
// 2. Visualize static IR Graph based on IR.
// 3. click on one item, open input/output/container/command/image/argument/volume mount/etc.
// 4. Show IR detail
// 5. Show pipeline name,etc.
// 6. Show runtime graph.

class PipelineDetailsV2 extends Page<{}, PipelineDetailsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      graph: null,
      reducedGraph: null,
      pipeline: null,
      selectedNodeId: 'a',
      selectedNodeInfo: null,
      selectedTab: 0,
      summaryShown: true,
      versions: [],
      showReducedGraph: false,
      pipelineIR: '',
      pipelineSpec: null,
      elements: [],
      namespaces: [],
      isSidePanelOpen: false,
    };
  }

  public getInitialToolbarState(): ToolbarProps {
    const buttons = new Buttons(this.props, this.refresh.bind(this));
    const fromRunId = new URLParser(this.props).get(QUERY_PARAMS.fromRunId);
    const pipelineIdFromParams = this.props.match.params[RouteParams.pipelineId];
    const pipelineVersionIdFromParams = this.props.match.params[RouteParams.pipelineVersionId];
    buttons
      .newRunFromPipelineVersion(
        () => {
          return pipelineIdFromParams ? pipelineIdFromParams : '';
        },
        () => {
          return pipelineVersionIdFromParams ? pipelineVersionIdFromParams : '';
        },
      )
      .newPipelineVersion('Upload version', () =>
        pipelineIdFromParams ? pipelineIdFromParams : '',
      );
    // .submitPipeline('Submit Pipeline', (content:string) => {onSubmit(content)});

    if (fromRunId) {
      return {
        actions: buttons.getToolbarActionMap(),
        breadcrumbs: [
          {
            displayName: fromRunId,
            href: RoutePage.RUN_DETAILS.replace(':' + RouteParams.runId, fromRunId),
          },
        ],
        pageTitle: 'Pipeline details',
      };
    } else {
      // Add buttons for creating experiment and deleting pipeline version
      buttons
        .newExperiment(() =>
          this.state.pipeline
            ? this.state.pipeline.id!
            : pipelineIdFromParams
            ? pipelineIdFromParams
            : '',
        )
        .delete(
          () => (pipelineVersionIdFromParams ? [pipelineVersionIdFromParams] : []),
          'pipeline version',
          this._deleteCallback.bind(this),
          true /* useCurrentResource */,
        );
      return {
        actions: buttons.getToolbarActionMap(),
        breadcrumbs: [{ displayName: 'Pipelines', href: RoutePage.PIPELINES }],
        pageTitle: this.props.match.params[RouteParams.pipelineId],
      };
    }
  }
  public render(): JSX.Element {
    const {
      pipeline,
      selectedNodeId,
      selectedTab,
      selectedVersion,
      summaryShown,
      templateString,
      versions,
      showReducedGraph,
      pipelineIR,
      elements,
      namespaces,
      pipelineSpec,
      isSidePanelOpen,
    } = this.state;

    const graphToShow =
      this.state.showReducedGraph && this.state.reducedGraph
        ? this.state.reducedGraph
        : this.state.graph;
    let selectedNodeInfo: StaticGraphParser.SelectedNodeInfo | null = null;
    if (graphToShow && graphToShow.node(selectedNodeId)) {
      selectedNodeInfo = graphToShow.node(selectedNodeId).info;
      if (!!selectedNodeId && !selectedNodeInfo) {
        logger.error(`Node with ID: ${selectedNodeId} was not found in the graph`);
      }
    }

    let editorHeightWidth = '100%';

    const updateGraph = (spec: PipelineSpec) => {
      const newelements = FlowUtil.convertToFlowElements(spec);

      this.setStateSafe({ pipelineSpec: spec, elements: newelements, namespaces: ['root'] });
    };
    const onSubmit = (content: string) => {
      this.setStateSafe({ pipelineIR: content });
      protobuf.load('static/pipeline_spec.proto').then(function(root) {
        if (!root) {
          return;
        }

        // Obtain a message type
        var PipelineSpecVar = root.lookupType('ml_pipelines.PipelineSpec');

        // Exemplary payload
        var payload = JSON.parse(content);

        var payloadPipelineSpec = payload['pipelineSpec'];

        // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = PipelineSpecVar.verify(payloadPipelineSpec);
        // if (errMsg) throw Error(errMsg);

        // // Create a new message
        var message = PipelineSpecVar.fromObject(payloadPipelineSpec); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        var buffer = PipelineSpecVar.encode(message).finish();
        // // ... do something with buffer
        const spec = PipelineSpec.deserializeBinary(buffer);
        console.log(
          'PipelineSpec ' +
            spec
              .getRoot()
              ?.getDag()
              ?.getTasksMap()
              .get('component-with-concat-placeholder')
              ?.getInputs()
              ?.getParametersMap()
              ?.get('input_prefix')
              ?.getRuntimeValue()
              ?.getConstantValue()
              ?.getStringValue(),
          // ?.getName(),
        );
        updateGraph(spec);
      });
    };

    const onClickNode = (node: Node) => {
      this.setStateSafe({ isSidePanelOpen: true });
    };

    const doubleClickNode = (node: Node) => {
      if (node.data['taskType'] !== TaskType.DAG) {
        return;
      }
      const newNamespaces = [...namespaces, node.id];
      const newElements = FlowUtil.convertSubDagToFlowElements(pipelineSpec!, newNamespaces);
      this.setStateSafe({ namespaces: newNamespaces, elements: newElements });
    };

    const setNamespaces = (n: string[]) => {
      const newElements = FlowUtil.convertSubDagToFlowElements(pipelineSpec!, n);
      this.setStateSafe({ namespaces: n, elements: newElements });
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const filename = event.target.value;

      fetch(process.env.PUBLIC_URL + '/spec/' + filename)
        .then(res => res.json())
        .then(data => {
          onSubmit(JSON.stringify(data));
        });
    };

    const samples = [
      'pipeline_with_concat_placeholder.json',
      'pipeline_with_loop_output.json',
      'xgboost_sample_pipeline.json',
      'pipeline_with_various_io_types.json',
      'pipeline_with_ontology.json',
      'lightweight_python_functions_v2_pipeline.json',
      'pipeline_with_if_placeholder.json',
      'pipeline_with_loops_and_conditions.json',
      'pipeline_with_nested_conditions_yaml.json',
      'pipeline_with_nested_conditions.json',
      'pipeline_with_nested_loops.json',
    ];

    return (
      <div className={classes(commonCss.page, padding(20, 't'))}>
        <div className={commonCss.page}>
          <div className={commonCss.page}>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start' }}>
              <div style={{ margin: 'auto' }}>
                <select onChange={handleSelectChange}>
                  {samples.map(sample => {
                    return <option value={sample}>{sample}</option>;
                  })}
                </select>
              </div>
              <div style={{ margin: 'auto' }}>
                <PipelineIRDialog onSubmit={onSubmit}></PipelineIRDialog>
              </div>
            </div>
            <div className={commonCss.page}>
              <div className={commonCss.page} style={{ position: 'relative', overflow: 'hidden' }}>
                <StaticCanvas
                  elements={this.state.elements}
                  namespaces={this.state.namespaces}
                  onClickNode={onClickNode}
                  doubleClickNode={doubleClickNode}
                  setNamespaces={setNamespaces}
                ></StaticCanvas>
                {/* <div>{pipelineIR}</div> */}
                <SidePanel
                  isOpen={isSidePanelOpen}
                  title={selectedNodeId}
                  onClose={() => this.setStateSafe({ isSidePanelOpen: false })}
                >
                  <div className={commonCss.page}>
                    {/* {!selectedNodeInfo && (
                    <div className={commonCss.absoluteCenter}>Unable to retrieve node info</div>
                  )} */}
                    {!!selectedNodeInfo && (
                      <div className={padding(20, 'lr')}>
                        <StaticNodeDetails nodeInfo={selectedNodeInfo} />
                      </div>
                    )}
                  </div>
                </SidePanel>
              </div>
              {graphToShow && (
                <div
                  className={commonCss.page}
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  {!!pipeline && summaryShown && (
                    <Paper className={css.summaryCard}>
                      <div
                        style={{
                          alignItems: 'baseline',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div className={commonCss.header}>Summary</div>
                        <Button
                          onClick={() => this.setStateSafe({ summaryShown: false })}
                          color='secondary'
                        >
                          Hide
                        </Button>
                      </div>
                      <div className={css.summaryKey}>ID</div>
                      <div>{pipeline.id || 'Unable to obtain Pipeline ID'}</div>
                      {versions.length && (
                        <React.Fragment>
                          <form autoComplete='off'>
                            <FormControl>
                              <InputLabel>Version</InputLabel>
                              <Select
                                value={
                                  selectedVersion
                                    ? selectedVersion.id
                                    : pipeline.default_version!.id!
                                }
                                onChange={event => this.handleVersionSelected(event.target.value)}
                                inputProps={{ id: 'version-selector', name: 'selectedVersion' }}
                              >
                                {versions.map((v, _) => (
                                  <MenuItem key={v.id} value={v.id}>
                                    {v.name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </form>
                          <div className={css.summaryKey}>
                            <a
                              href={this._createVersionUrl()}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              Version source
                            </a>
                          </div>
                        </React.Fragment>
                      )}
                      <div className={css.summaryKey}>Uploaded on</div>
                      <div>{formatDateString(pipeline.created_at)}</div>
                      <div className={css.summaryKey}>Description</div>
                      <Description description={pipeline.description || ''} />
                    </Paper>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className={classes(commonCss.page, padding(20, 't'))}>
    //     <div className={commonCss.page}>
    //       <MD2Tabs
    //         selectedTab={selectedTab}
    //         onSwitch={(tab: number) => this.setStateSafe({ selectedTab: tab })}
    //         tabs={['Graph', 'YAML']}
    //       />
    //       <div className={commonCss.page}>
    //         {selectedTab === 0 && (
    //           <div className={commonCss.page}>
    //             {graphToShow && (
    //               <div
    //                 className={commonCss.page}
    //                 style={{ position: 'relative', overflow: 'hidden' }}
    //               >
    //                 {!!pipeline && summaryShown && (
    //                   <Paper className={css.summaryCard}>
    //                     <div
    //                       style={{
    //                         alignItems: 'baseline',
    //                         display: 'flex',
    //                         justifyContent: 'space-between',
    //                       }}
    //                     >
    //                       <div className={commonCss.header}>Summary</div>
    //                       <Button
    //                         onClick={() => this.setStateSafe({ summaryShown: false })}
    //                         color='secondary'
    //                       >
    //                         Hide
    //                       </Button>
    //                     </div>
    //                     <div className={css.summaryKey}>ID</div>
    //                     <div>{pipeline.id || 'Unable to obtain Pipeline ID'}</div>
    //                     {versions.length && (
    //                       <React.Fragment>
    //                         <form autoComplete='off'>
    //                           <FormControl>
    //                             <InputLabel>Version</InputLabel>
    //                             <Select
    //                               value={
    //                                 selectedVersion
    //                                   ? selectedVersion.id
    //                                   : pipeline.default_version!.id!
    //                               }
    //                               onChange={event => this.handleVersionSelected(event.target.value)}
    //                               inputProps={{ id: 'version-selector', name: 'selectedVersion' }}
    //                             >
    //                               {versions.map((v, _) => (
    //                                 <MenuItem key={v.id} value={v.id}>
    //                                   {v.name}
    //                                 </MenuItem>
    //                               ))}
    //                             </Select>
    //                           </FormControl>
    //                         </form>
    //                         <div className={css.summaryKey}>
    //                           <a
    //                             href={this._createVersionUrl()}
    //                             target='_blank'
    //                             rel='noopener noreferrer'
    //                           >
    //                             Version source
    //                           </a>
    //                         </div>
    //                       </React.Fragment>
    //                     )}
    //                     <div className={css.summaryKey}>Uploaded on</div>
    //                     <div>{formatDateString(pipeline.created_at)}</div>
    //                     <div className={css.summaryKey}>Description</div>
    //                     <Description description={pipeline.description || ''} />
    //                   </Paper>
    //                 )}

    //                 <Graph
    //                   graph={graphToShow}
    //                   selectedNodeId={selectedNodeId}
    //                   onClick={id => this.setStateSafe({ selectedNodeId: id })}
    //                   onError={(message, additionalInfo) =>
    //                     this.props.updateBanner({ message, additionalInfo, mode: 'error' })
    //                   }
    //                 />

    //                 <ReduceGraphSwitch
    //                   disabled={!this.state.reducedGraph}
    //                   checked={showReducedGraph}
    //                   onChange={_ => {
    //                     this.setState({ showReducedGraph: !this.state.showReducedGraph });
    //                   }}
    //                 />

    //                 <SidePanel
    //                   isOpen={!!selectedNodeId}
    //                   title={selectedNodeId}
    //                   onClose={() => this.setStateSafe({ selectedNodeId: '' })}
    //                 >
    //                   <div className={commonCss.page}>
    //                     {!selectedNodeInfo && (
    //                       <div className={commonCss.absoluteCenter}>
    //                         Unable to retrieve node info
    //                       </div>
    //                     )}
    //                     {!!selectedNodeInfo && (
    //                       <div className={padding(20, 'lr')}>
    //                         <StaticNodeDetails nodeInfo={selectedNodeInfo} />
    //                       </div>
    //                     )}
    //                   </div>
    //                 </SidePanel>
    //                 <div className={css.footer}>
    //                   {!summaryShown && (
    //                     <Button
    //                       onClick={() => this.setStateSafe({ summaryShown: !summaryShown })}
    //                       color='secondary'
    //                     >
    //                       Show summary
    //                     </Button>
    //                   )}
    //                   <div
    //                     className={classes(
    //                       commonCss.flex,
    //                       summaryShown && !!pipeline && css.footerInfoOffset,
    //                     )}
    //                   >
    //                     <InfoIcon className={commonCss.infoIcon} />
    //                     <span className={css.infoSpan}>Static pipeline graph</span>
    //                   </div>
    //                 </div>
    //               </div>
    //             )}
    //             {!graphToShow && <span style={{ margin: '40px auto' }}>No graph to show</span>}
    //           </div>
    //         )}
    //         {selectedTab === 1 && !!templateString && (
    //           <div className={css.containerCss}>
    //             <Editor
    //               value={templateString || ''}
    //               height={editorHeightWidth}
    //               width={editorHeightWidth}
    //               mode='yaml'
    //               theme='github'
    //               editorProps={{ $blockScrolling: true }}
    //               readOnly={true}
    //               highlightActiveLine={true}
    //               showGutter={true}
    //             />
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // );
  }

  public async handleVersionSelected(versionId: string): Promise<void> {
    if (this.state.pipeline) {
      const selectedVersion = (this.state.versions || []).find(v => v.id === versionId);
      const selectedVersionPipelineTemplate = await this._getTemplateString(
        this.state.pipeline.id!,
        versionId,
      );
      this.props.history.replace({
        pathname: `/pipelines/details/${this.state.pipeline.id}/version/${versionId}`,
      });
      const graph = await this._createGraph(selectedVersionPipelineTemplate);
      let reducedGraph = graph ? transitiveReduction(graph) : undefined;
      if (graph && reducedGraph && compareGraphEdges(graph, reducedGraph)) {
        reducedGraph = undefined; // disable reduction switch
      }
      this.setStateSafe({
        graph,
        reducedGraph,
        selectedVersion,
        templateString: selectedVersionPipelineTemplate,
      });
    }
  }

  public async refresh(): Promise<void> {
    return this.load();
  }

  public async componentDidMount(): Promise<void> {
    return this.load();
  }

  public async load(): Promise<void> {
    this.clearBanner();
    const fromRunId = new URLParser(this.props).get(QUERY_PARAMS.fromRunId);

    let pipeline: ApiPipeline | null = null;
    let version: ApiPipelineVersion | null = null;
    let templateString = '';
    let breadcrumbs: Array<{ displayName: string; href: string }> = [];
    const toolbarActions = this.props.toolbarProps.actions;
    let pageTitle = '';
    let selectedVersion: ApiPipelineVersion | undefined;
    let versions: ApiPipelineVersion[] = [];

    // If fromRunId is specified, load the run and get the pipeline template from it
    if (fromRunId) {
      try {
        const runDetails = await Apis.runServiceApi.getRun(fromRunId);

        // Convert the run's pipeline spec to YAML to be displayed as the pipeline's source.
        try {
          const pipelineSpec = JSON.parse(RunUtils.getWorkflowManifest(runDetails.run) || '{}');
          try {
            templateString = JsYaml.safeDump(pipelineSpec);
          } catch (err) {
            await this.showPageError(
              `Failed to parse pipeline spec from run with ID: ${runDetails.run!.id}.`,
              err,
            );
            logger.error(
              `Failed to convert pipeline spec YAML from run with ID: ${runDetails.run!.id}.`,
              err,
            );
          }
        } catch (err) {
          await this.showPageError(
            `Failed to parse pipeline spec from run with ID: ${runDetails.run!.id}.`,
            err,
          );
          logger.error(
            `Failed to parse pipeline spec JSON from run with ID: ${runDetails.run!.id}.`,
            err,
          );
        }

        const relatedExperimentId = RunUtils.getFirstExperimentReferenceId(runDetails.run);
        let experiment: ApiExperiment | undefined;
        if (relatedExperimentId) {
          experiment = await Apis.experimentServiceApi.getExperiment(relatedExperimentId);
        }

        // Build the breadcrumbs, by adding experiment and run names
        if (experiment) {
          breadcrumbs.push(
            { displayName: 'Experiments', href: RoutePage.EXPERIMENTS },
            {
              displayName: experiment.name!,
              href: RoutePage.EXPERIMENT_DETAILS.replace(
                ':' + RouteParams.experimentId,
                experiment.id!,
              ),
            },
          );
        } else {
          breadcrumbs.push({ displayName: 'All runs', href: RoutePage.RUNS });
        }
        breadcrumbs.push({
          displayName: runDetails.run!.name!,
          href: RoutePage.RUN_DETAILS.replace(':' + RouteParams.runId, fromRunId),
        });
        pageTitle = 'Pipeline details';
      } catch (err) {
        await this.showPageError('Cannot retrieve run details.', err);
        logger.error('Cannot retrieve run details.', err);
      }
    } else {
      // if fromRunId is not specified, then we have a full pipeline
      const pipelineId = this.props.match.params[RouteParams.pipelineId];

      try {
        pipeline = await Apis.pipelineServiceApi.getPipeline(pipelineId);
      } catch (err) {
        // await this.showPageError('Cannot retrieve pipeline details.', err);
        logger.error('Cannot retrieve pipeline details.', err);
        return;
      }

      const versionId = this.props.match.params[RouteParams.pipelineVersionId];

      try {
        // TODO(rjbauer): it's possible we might not have a version, even default
        if (versionId) {
          version = await Apis.pipelineServiceApi.getPipelineVersion(versionId);
        }
      } catch (err) {
        await this.showPageError('Cannot retrieve pipeline version.', err);
        logger.error('Cannot retrieve pipeline version.', err);
        return;
      }

      selectedVersion = versionId ? version! : pipeline.default_version;

      if (!selectedVersion) {
        // An empty pipeline, which doesn't have any version.
        pageTitle = pipeline.name!;
        const actions = this.props.toolbarProps.actions;
        actions[ButtonKeys.DELETE_RUN].disabled = true;
        this.props.updateToolbar({ actions });
      } else {
        // Fetch manifest for the selected version under this pipeline.
        pageTitle = pipeline.name!.concat(' (', selectedVersion!.name!, ')');
        try {
          // TODO(jingzhang36): pagination not proper here. so if many versions,
          // the page size value should be?
          versions =
            (
              await Apis.pipelineServiceApi.listPipelineVersions(
                'PIPELINE',
                pipelineId,
                50,
                undefined,
                'created_at desc',
              )
            ).versions || [];
        } catch (err) {
          await this.showPageError('Cannot retrieve pipeline versions.', err);
          logger.error('Cannot retrieve pipeline versions.', err);
          return;
        }
        templateString = await this._getTemplateString(pipelineId, versionId);
      }

      breadcrumbs = [{ displayName: 'Pipelines', href: RoutePage.PIPELINES }];
    }

    this.props.updateToolbar({ breadcrumbs, actions: toolbarActions, pageTitle });

    const graph = await this._createGraph(templateString);
    let reducedGraph = graph ? transitiveReduction(graph) : undefined;
    if (graph && reducedGraph && compareGraphEdges(graph, reducedGraph)) {
      reducedGraph = undefined; // disable reduction switch
    }
    this.setStateSafe({
      graph,
      reducedGraph,
      pipeline,
      selectedVersion,
      templateString,
      versions,
    });
  }

  private async _getTemplateString(pipelineId: string, versionId: string): Promise<string> {
    try {
      let templateResponse: ApiGetTemplateResponse;
      if (versionId) {
        templateResponse = await Apis.pipelineServiceApi.getPipelineVersionTemplate(versionId);
      } else {
        templateResponse = await Apis.pipelineServiceApi.getTemplate(pipelineId);
      }
      return templateResponse.template || '';
    } catch (err) {
      //   await this.showPageError('Cannot retrieve pipeline template.', err);
      logger.error('Cannot retrieve pipeline details.', err);
    }
    return '';
  }

  private async _createGraph(templateString: string): Promise<dagre.graphlib.Graph | null> {
    if (templateString) {
      try {
        const template = JsYaml.safeLoad(templateString);
        return StaticGraphParser.createGraph(template!);
      } catch (err) {
        await this.showPageError('Error: failed to generate Pipeline graph.', err);
      }
    }
    return null;
  }

  private _createVersionUrl(): string {
    return this.state.selectedVersion!.code_source_url!;
  }

  private _deleteCallback(_: string[], success: boolean): void {
    if (success) {
      const breadcrumbs = this.props.toolbarProps.breadcrumbs;
      const previousPage = breadcrumbs.length
        ? breadcrumbs[breadcrumbs.length - 1].href
        : RoutePage.PIPELINES;
      this.props.history.push(previousPage);
    }
  }
}

export default PipelineDetailsV2;