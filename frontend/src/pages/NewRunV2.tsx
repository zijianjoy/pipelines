/*
 * Copyright 2022 The Kubeflow Authors
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

import { Button, Dialog, DialogActions, DialogContent, InputAdornment } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { ApiExperiment, ApiExperimentStorageState } from 'src/apis/experiment';
import { ApiFilter, PredicateOp } from 'src/apis/filter';
import { ApiPipeline, ApiPipelineVersion } from 'src/apis/pipeline';
import {
  ApiRelationship,
  ApiResourceReference,
  ApiResourceType,
  ApiRun,
  ApiRunDetail,
  PipelineSpecRuntimeConfig,
} from 'src/apis/run';
import BusyButton from 'src/atoms/BusyButton';
import { ExternalLink } from 'src/atoms/ExternalLink';
import { HelpButton } from 'src/atoms/HelpButton';
import Input from 'src/atoms/Input';
import { CustomRendererProps } from 'src/components/CustomTable';
import { NameWithTooltip } from 'src/components/CustomTableNameColumn';
import { Description } from 'src/components/Description';
import NewRunParametersV2 from 'src/components/NewRunParametersV2';
import { QUERY_PARAMS, RoutePage, RouteParams } from 'src/components/Router';
import { color, commonCss, padding } from 'src/Css';
import { ComponentInputsSpec_ParameterSpec } from 'src/generated/pipeline_spec/pipeline_spec';
import { Apis, ExperimentSortKeys, PipelineSortKeys, PipelineVersionSortKeys } from 'src/lib/Apis';
// import Buttons from 'src/lib/Buttons';
import { URLParser } from 'src/lib/URLParser';
import { errorToMessage, generateRandomString } from 'src/lib/Utils';
import { convertYamlToV2PipelineSpec } from 'src/lib/v2/WorkflowUtils';
import { classes, stylesheet } from 'typestyle';
import { PageProps } from './Page';
import ResourceSelector from './ResourceSelector';

const css = stylesheet({
  nonEditableInput: {
    color: color.secondaryText,
  },
  selectorDialog: {
    // If screen is small, use calc(100% - 120px). If screen is big, use 1200px.
    maxWidth: 1200, // override default maxWidth to expand this dialog further
    minWidth: 680,
    width: 'calc(100% - 120px)',
  },
});

const descriptionCustomRenderer: React.FC<CustomRendererProps<string>> = props => {
  return <Description description={props.value || ''} forceInline={true} />;
};

interface RunV2Props {
  namespace?: string;
  existingRunId: string | null;
  apiRun: ApiRunDetail | undefined;
  existingPipelineId: string | null;
  existingPipeline: ApiPipeline | undefined;
  handlePipelineIdChange: (pipelineId: string) => void;
  existingPipelineVersionId: string | undefined;
  handlePipelineVersionIdChange: (pipelineVersionId: string) => void;
  existingPipelineVersion: ApiPipelineVersion | undefined;
  templateString: string | undefined;
}

type NewRunV2Props = RunV2Props & PageProps;

export type SpecParameters = { [key: string]: ComponentInputsSpec_ParameterSpec };
export type RuntimeParameters = { [key: string]: any };

function hasVersionID(apiRun: ApiRunDetail | undefined): boolean {
  if (!apiRun) {
    return true;
  }
  let hasVersionType: boolean = false;
  if (apiRun.run?.resource_references) {
    apiRun.run.resource_references.forEach(value => {
      hasVersionType = hasVersionType || value.key?.type === ApiResourceType.PIPELINEVERSION;
    });
  }
  return hasVersionType;
}

function NewRunV2(props: NewRunV2Props) {
  // List of elements we need to create Pipeline Run.
  const [pipelineName, setPipelineName] = useState('');
  const [pipelineVersionName, setPipelineVersionName] = useState('');
  const [runName, setRunName] = useState('');
  const [runDescription, setRunDescription] = useState('');
  const [pipeline, setPipeline] = useState<ApiPipeline>();
  const [updatedPipeline, setUpdatedPipeline] = useState<ApiPipeline>();
  const [pipelineVersion, setPipelineVersion] = useState<ApiPipelineVersion>();
  const [updatedPipelineVersion, setUpdatedPipelineVersion] = useState<ApiPipelineVersion>();
  // const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [apiExperiment, setApiExperiment] = useState<ApiExperiment>();
  const [serviceAccount, setServiceAccount] = useState('');
  const [specParameters, setSpecParameters] = useState<SpecParameters>({});
  const [runtimeParameters, setRuntimeParameters] = useState<RuntimeParameters>({});
  const [pipelineRoot, setPipelineRoot] = useState<string>();
  const [isStartButtonEnabled, setIsStartButtonEnabled] = useState(false);
  const [isStartingNewRun, setIsStartingNewRun] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isParameterValid, setIsParameterValid] = useState(false);
  const [clonedRuntimeConfig, setClonedRuntimeConfig] = useState<PipelineSpecRuntimeConfig>({});
  // const [, forceUpdate] = useState();
  // TODO(zijianjoy): If creating run from Experiment Page or RunList Page, there is no pipelineId/Version.
  const urlParser = new URLParser(props);
  const usePipelineFromRunLabel = 'Using pipeline from existing run.';
  const { existingRunId, apiRun, apiPipeline, apiPipelineVersion, templateString } = props;
  const pipelineDetailsUrl = existingRunId
    ? RoutePage.PIPELINE_DETAILS.replace(
        ':' + RouteParams.pipelineId + '/version/:' + RouteParams.pipelineVersionId + '?',
        '',
      ) + urlParser.build({ [QUERY_PARAMS.fromRunId]: existingRunId })
    : '';
  //const buttons = new Buttons(props, () => forceUpdate);
  // const [buttons] = useState(new Buttons(props, () => forceUpdate));

  const {
    templateString,
    existingRunId: originalRunId,
    handlePipelineIdChange,
    handlePipelineVersionIdChange,
  } = props;
  const isTemplatePullSuccess = templateString && templateString !== '';
  const apiResourceRefFromRun = apiRun?.run?.resource_references
    ? apiRun.run?.resource_references
    : undefined;

  const isRecurringRun = urlParser.get(QUERY_PARAMS.isRecurring) === '1';
  const titleVerb = originalRunId ? 'Clone' : 'Start';
  const titleAdjective = originalRunId ? '' : 'new';

  useEffect(() => {
    setPipeline(existingPipeline);
    setPipelineVersion(existingPipelineVersion);
  }, [existingPipeline, existingPipelineVersion]);

  useEffect(() => {
    if (updatedPipeline?.id) {
      const searchString = urlParser.build({
        [QUERY_PARAMS.pipelineId]: updatedPipeline.id || '',
        [QUERY_PARAMS.pipelineVersionId]: '',
      });
      props.history.replace(searchString);
      handlePipelineVersionIdChange('');
      handlePipelineIdChange(updatedPipeline.id);
    }

    if (pipeline?.id && updatedPipelineVersion?.id) {
      const searchString = urlParser.build({
        [QUERY_PARAMS.pipelineId]: pipeline.id || '',
        [QUERY_PARAMS.pipelineVersionId]: updatedPipelineVersion.id || '',
      });
      props.history.replace(searchString);
      handlePipelineVersionIdChange(updatedPipelineVersion.id);
    }
  }, [updatedPipeline, updatedPipelineVersion]);

  // Title and list of actions on the top of page.
  useEffect(() => {
    props.updateToolbar({
      actions: {},
      pageTitle: isRecurringRun
        ? `${titleVerb} a recurring run`
        : `${titleVerb} a ${titleAdjective} run`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pipeline?.name) {
      setPipelineName(pipeline.name);
    }
    if (pipelineVersion?.name) {
      setPipelineVersionName(pipelineVersion.name);
    }
  }, [pipeline, pipelineVersion]);

  // When loading a pipeline version, automatically set the default run name.
  useEffect(() => {
    if (apiRun?.run?.name) {
      const cloneRunName = 'Clone of ' + apiRun.run.name;
      setRunName(cloneRunName);
    } else if (pipelineVersion?.name) {
      const initRunName = 'Run of ' + pipelineVersion.name + ' (' + generateRandomString(5) + ')';
      setRunName(initRunName);
    }
  }, [apiRun, pipelineVersion]);

  // Set pipeline spec, pipeline root and parameters fields on UI based on returned template.
  useEffect(() => {
    if (!templateString) {
      return;
    }

    const spec = convertYamlToV2PipelineSpec(templateString);

    const params = spec.root?.inputDefinitions?.parameters;
    if (params) {
      setSpecParameters(params);
    }

    const root = spec.defaultPipelineRoot;
    if (root) {
      setPipelineRoot(root);
    }
  }, [templateString]);

  // Handle different change that can affect setIsStartButtonEnabled
  useEffect(() => {
    if (!templateString || errorMessage || !isParameterValid) {
      setIsStartButtonEnabled(false);
    } else {
      setIsStartButtonEnabled(true);
    }
  }, [templateString, errorMessage, isParameterValid]);

  useEffect(() => {
    if (apiRun?.run?.pipeline_spec?.runtime_config) {
      setClonedRuntimeConfig(apiRun?.run?.pipeline_spec?.runtime_config);
    }
  }, [apiRun]);

  // Whenever any input value changes, validate and show error if needed.
  // TODO(zijianjoy): Validate run name for now, we need to validate others first.
  useEffect(() => {
    if (isTemplatePullSuccess) {
      if (runName) {
        setErrorMessage('');
        return;
      } else {
        setErrorMessage('Run name can not be empty.');
        return;
      }
    }
  }, [runName, isTemplatePullSuccess]);

  // Defines the behavior when user clicks `Start` button.
  const newRunMutation = useMutation((apiRun: ApiRun) => {
    return Apis.runServiceApi.createRun(apiRun);
  });
  const startRun = () => {
    const references: ApiResourceReference[] = [];
    if (apiExperiment) {
      references.push({
        key: {
          id: apiExperiment.id,
          type: ApiResourceType.EXPERIMENT,
        },
        relationship: ApiRelationship.OWNER,
      });
    }
    if (apiPipelineVersion && hasVersionID(apiRun)) {
      references.push({
        key: {
          id: pipelineVersion.id,
          type: ApiResourceType.PIPELINEVERSION,
        },
        relationship: ApiRelationship.CREATOR,
      });
    }

    let newRun: ApiRun = {
      description: runDescription,
      name: runName,
      pipeline_spec: {
        pipeline_manifest: hasVersionID(apiRun) ? undefined : templateString,
        runtime_config: {
          // TODO(zijianjoy): determine whether to provide pipeline root.
          pipeline_root: undefined, // pipelineRoot,
          parameters: runtimeParameters,
        },
      },
      //TODO(jlyaoyuli): deprecate the resource reference and use pipeline / workflow manifest
      resource_references: apiResourceRefFromRun ? apiResourceRefFromRun : references,
      service_account: serviceAccount,
    };
    setIsStartingNewRun(true);

    newRunMutation.mutate(newRun, {
      onSuccess: data => {
        setIsStartingNewRun(false);
        if (data.run?.id) {
          props.history.push(RoutePage.RUN_DETAILS.replace(':' + RouteParams.runId, data.run.id));
        }
        props.history.push(RoutePage.RUNS);

        props.updateSnackbar({
          message: `Successfully started new Run: ${data.run?.name}`,
          open: true,
        });
      },
      onError: async error => {
        const errorMessage = await errorToMessage(error);
        props.updateDialog({
          buttons: [{ text: 'Dismiss' }],
          onClose: () => setIsStartingNewRun(false),
          content: errorMessage,
          title: 'Run creation failed',
        });
      },
    });
  };

  return (
    <div className={classes(commonCss.page, padding(20, 'lr'))}>
      <div className={commonCss.scrollContainer}>
        <div className={commonCss.header}>Run details</div>

        {apiRun && (
          <div>
            <div>
              <span>{usePipelineFromRunLabel}</span>
            </div>
            <div className={classes(padding(10, 't'))}>
              {apiRun && (
                <Link className={classes(commonCss.link)} to={pipelineDetailsUrl}>
                  [View pipeline]
                </Link>
              )}
            </div>
          </div>
        )}

        {!apiRun && (
          <div>
            {/* Pipeline selection */}
            <PipelineSelector
              {...props}
              setUpdatedPipeline={setUpdatedPipeline}
              pipelineName={pipelineName}
              setPipelineName={setPipelineName}
            />

            {/* Pipeline version selection */}
            <PipelineVersionSelector
              {...props}
              pipeline={pipeline}
              setUpdatedPipelineVersion={setUpdatedPipelineVersion}
              pipelineVersionName={pipelineVersionName}
              setPipelineVersionName={setPipelineVersionName}
            />
          </div>
        )}

        {/* Run info inputs */}
        <Input
          label={'Run name'}
          required={true}
          onChange={event => setRunName(event.target.value)}
          autoFocus={true}
          value={runName}
          variant='outlined'
        />
        <Input
          label='Description (optional)'
          multiline={true}
          onChange={event => setRunDescription(event.target.value)}
          value={runDescription}
          variant='outlined'
        />

        {/* Experiment selection */}
        <div>This run will be associated with the following experiment</div>
        <ExperimentSelector {...props} setApiExperiment={setApiExperiment} />

        {/* Service account selection */}
        <div>
          This run will use the following Kubernetes service account.{' '}
          <HelpButton
            helpText={
              <div>
                Note, the service account needs{' '}
                <ExternalLink href='https://argoproj.github.io/argo-workflows/workflow-rbac/'>
                  minimum permissions required by argo workflows
                </ExternalLink>{' '}
                and extra permissions the specific task requires.
              </div>
            }
          />
        </div>
        <Input
          value={serviceAccount}
          onChange={event => setServiceAccount(event.target.value)}
          label='Service Account (Optional)'
          variant='outlined'
        />

        {/* One-off/Recurring Run Type */}
        {/* TODO(zijianjoy): Support Recurring Run */}
        <div className={commonCss.header}>Run Type</div>
        <div>Only one-off run is supported for KFPv2 Pipeline at the moment.</div>

        {/* PipelineRoot and Run Parameters */}
        <NewRunParametersV2
          pipelineRoot={pipelineRoot}
          handlePipelineRootChange={setPipelineRoot}
          titleMessage={
            Object.keys(specParameters).length
              ? 'Specify parameters required by the pipeline'
              : 'This pipeline has no parameters'
          }
          specParameters={specParameters}
          clonedRuntimeConfig={clonedRuntimeConfig}
          handleParameterChange={setRuntimeParameters}
          setIsValidInput={setIsParameterValid}
        />

        {/* Create/Cancel buttons */}
        <div className={classes(commonCss.flex, padding(20, 'tb'))}>
          <BusyButton
            id='startNewRunBtn'
            disabled={!isStartButtonEnabled}
            busy={isStartingNewRun}
            className={commonCss.buttonAction}
            title='Start'
            onClick={startRun}
          />
          <Button
            id='exitNewRunPageBtn'
            onClick={() => {
              // TODO(zijianjoy): Return to previous page instead of defaulting to RUNS page.
              props.history.push(RoutePage.RUNS);
            }}
          >
            {'Cancel'}
          </Button>
          <div className={classes(padding(20, 'r'))} style={{ color: 'red' }}>
            {errorMessage}
          </div>
          {/* TODO(zijianjoy): Show error when custom pipelineRoot or parameters are missing. */}
        </div>
      </div>
    </div>
  );
}

export default NewRunV2;

const PIPELINE_SELECTOR_COLUMNS = [
  {
    customRenderer: NameWithTooltip,
    flex: 1,
    label: 'Pipeline name',
    sortKey: PipelineSortKeys.NAME,
  },
  { label: 'Description', flex: 2, customRenderer: descriptionCustomRenderer },
  { label: 'Uploaded on', flex: 1, sortKey: PipelineSortKeys.CREATED_AT },
];

const PIPELINE_VERSION_SELECTOR_COLUMNS = [
  {
    customRenderer: NameWithTooltip,
    flex: 2,
    label: 'Version name',
    sortKey: PipelineVersionSortKeys.NAME,
  },
  // TODO(jingzhang36): version doesn't have description field; remove it and
  // fix the rendering.
  { label: 'Description', flex: 1, customRenderer: descriptionCustomRenderer },
  { label: 'Uploaded on', flex: 1, sortKey: PipelineVersionSortKeys.CREATED_AT },
];

const EXPERIMENT_SELECTOR_COLUMNS = [
  {
    customRenderer: NameWithTooltip,
    flex: 1,
    label: 'Experiment name',
    sortKey: ExperimentSortKeys.NAME,
  },
  { label: 'Description', flex: 2 },
  { label: 'Created at', flex: 1, sortKey: ExperimentSortKeys.CREATED_AT },
];

interface PipelineSelectorSpecificProps {
  namespace?: string;
  setUpdatedPipeline: (apiPipeline: ApiPipeline) => void;
  pipelineName: string | undefined;
  setPipelineName: (pipelineName: string) => void;
}
type PipelineSelectorProps = PageProps & PipelineSelectorSpecificProps;

function PipelineSelector(props: PipelineSelectorProps) {
  const [pipelineSelectorOpen, setPipelineSelectorOpen] = useState(false);
  const [pendingPipeline, setPendingPipeline] = useState<ApiPipeline>();

  return (
    <>
      <Input
        value={props.pipelineName}
        required={true}
        label='Pipeline'
        disabled={true}
        variant='outlined'
        InputProps={{
          classes: { disabled: css.nonEditableInput },
          endAdornment: (
            <InputAdornment position='end'>
              <Button
                color='secondary'
                id='choosePipelineBtn'
                onClick={() => setPipelineSelectorOpen(true)}
                style={{ padding: '3px 5px', margin: 0 }}
              >
                Choose
              </Button>
            </InputAdornment>
          ),
          readOnly: true,
        }}
      />

      {/* Pipeline selector dialog */}
      <Dialog
        open={pipelineSelectorOpen}
        classes={{ paper: css.selectorDialog }}
        onClose={() => setPipelineSelectorOpen(false)}
        PaperProps={{ id: 'pipelineSelectorDialog' }}
      >
        <DialogContent>
          <ResourceSelector
            {...props}
            title='Choose a pipeline'
            filterLabel='Filter pipelines'
            listApi={async (...args) => {
              const response = await Apis.pipelineServiceApi.listPipelines(...args);
              return {
                nextPageToken: response.next_page_token || '',
                resources: response.pipelines || [],
              };
            }}
            columns={PIPELINE_SELECTOR_COLUMNS}
            emptyMessage='No pipelines found. Upload a pipeline and then try again.'
            initialSortColumn={PipelineSortKeys.CREATED_AT}
            selectionChanged={(selectedPipeline: ApiPipeline) =>
              setPendingPipeline(selectedPipeline)
            }
            // TODO(jlyaoyuli): enable pipeline upload function in the selector dialog
          />
        </DialogContent>
        <DialogActions>
          <Button
            id='cancelPipelineSelectionBtn'
            onClick={() => setPipelineSelectorOpen(false)}
            color='secondary'
          >
            Cancel
          </Button>
          <Button
            id='usePipelineBtn'
            onClick={() => {
              if (pendingPipeline && pendingPipeline.name) {
                props.setUpdatedPipeline(pendingPipeline);
                props.setPipelineName(pendingPipeline.name);
              }
              setPipelineSelectorOpen(false);
            }}
            color='secondary'
            disabled={!pendingPipeline}
          >
            Use this pipeline
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

interface PipelineVersionSelectorSpecificProps {
  namespace?: string;
  pipeline: ApiPipeline | undefined;
  setUpdatedPipelineVersion: (apiPipelineVersion: ApiPipelineVersion) => void;
  pipelineVersionName: string | undefined;
  setPipelineVersionName: (pipelineVersionName: string) => void;
}
type PipelineVersionSelectorProps = PageProps & PipelineVersionSelectorSpecificProps;

function PipelineVersionSelector(props: PipelineVersionSelectorProps) {
  const [pipelineVersionSelectorOpen, setPipelineVersionSelectorOpen] = useState(false);
  const [pendingPipelineVersion, setPendingPipelineVersion] = useState<ApiPipeline>();

  return (
    <>
      <Input
        value={props.pipelineVersionName}
        required={true}
        label='Pipeline Version'
        disabled={true}
        variant='outlined'
        InputProps={{
          classes: { disabled: css.nonEditableInput },
          endAdornment: (
            <InputAdornment position='end'>
              <Button
                color='secondary'
                id='choosePipelineVersionBtn'
                onClick={() => setPipelineVersionSelectorOpen(true)}
                style={{ padding: '3px 5px', margin: 0 }}
              >
                Choose
              </Button>
            </InputAdornment>
          ),
          readOnly: true,
        }}
      />

      {/* Pipeline version selector dialog */}
      <Dialog
        open={pipelineVersionSelectorOpen}
        classes={{ paper: css.selectorDialog }}
        onClose={() => setPipelineVersionSelectorOpen(false)}
        PaperProps={{ id: 'pipelineVersionSelectorDialog' }}
      >
        <DialogContent>
          <ResourceSelector
            {...props}
            title='Choose a pipeline version'
            filterLabel='Filter pipeline versions'
            listApi={async (...args) => {
              const response = await Apis.pipelineServiceApi.listPipelineVersions(
                'PIPELINE',
                props.pipeline ? props.pipeline!.id! : '',
                args[1] /* page size */,
                args[0] /* page token*/,
                args[2] /* sort by */,
                args[3] /* filter */,
              );
              return {
                nextPageToken: response.next_page_token || '',
                resources: response.versions || [],
              };
            }}
            columns={PIPELINE_VERSION_SELECTOR_COLUMNS}
            emptyMessage='No pipeline versions found. Select or upload a pipeline then try again.'
            initialSortColumn={PipelineVersionSortKeys.CREATED_AT}
            selectionChanged={(selectedPipelineVersion: ApiPipelineVersion) =>
              setPendingPipelineVersion(selectedPipelineVersion)
            }
            // TODO(jlyaoyuli): enable pipeline upload function in the selector dialog
          />
        </DialogContent>
        <DialogActions>
          <Button
            id='cancelPipelineVersionSelectionBtn'
            onClick={() => setPipelineVersionSelectorOpen(false)}
            color='secondary'
          >
            Cancel
          </Button>
          <Button
            id='usePipelineVersionBtn'
            onClick={() => {
              if (pendingPipelineVersion && pendingPipelineVersion.name) {
                props.setUpdatedPipelineVersion(pendingPipelineVersion);
                props.setPipelineVersionName(pendingPipelineVersion.name);
              }
              setPipelineVersionSelectorOpen(false);
            }}
            color='secondary'
            disabled={!pendingPipelineVersion}
          >
            Use this pipeline version
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

interface ExperimentSelectorSpecificProps {
  namespace?: string;
  setApiExperiment: (apiExperiment: ApiExperiment) => void;
}
type ExperimentSelectorProps = PageProps & ExperimentSelectorSpecificProps;

function ExperimentSelector(props: ExperimentSelectorProps) {
  const [experimentName, setExperimentName] = useState('');

  const [pendingExperiment, setPendingExperiment] = useState<ApiExperiment>();
  const [experimentSelectorOpen, setExperimentSelectorOpen] = useState(false);
  return (
    <>
      <Input
        value={experimentName}
        // TODO(jlyaoyuli): prefill the experimentName if experimentId is existing
        required={true}
        label='Experiment'
        disabled={true}
        variant='outlined'
        InputProps={{
          classes: { disabled: css.nonEditableInput },
          endAdornment: (
            <InputAdornment position='end'>
              <Button
                color='secondary'
                id='chooseExperimentBtn'
                onClick={() => setExperimentSelectorOpen(true)}
                style={{ padding: '3px 5px', margin: 0 }}
              >
                Choose
              </Button>
            </InputAdornment>
          ),
          readOnly: true,
        }}
      />

      {/* Experiment selector dialog */}
      <Dialog
        open={experimentSelectorOpen}
        classes={{ paper: css.selectorDialog }}
        onClose={() => setExperimentSelectorOpen(false)}
        PaperProps={{ id: 'experimentSelectorDialog' }}
      >
        <DialogContent>
          <ResourceSelector
            {...props}
            title='Choose an experiment'
            filterLabel='Filter experiments'
            listApi={async (
              page_token?: string,
              page_size?: number,
              sort_by?: string,
              filter?: string,
            ) => {
              // A new run can only be created in an unarchived experiment.
              // Therefore, when listing experiments here for selection, we
              // only list unarchived experiments.
              const new_filter = JSON.parse(
                decodeURIComponent(filter || '{"predicates": []}'),
              ) as ApiFilter;
              new_filter.predicates = (new_filter.predicates || []).concat([
                {
                  key: 'storage_state',
                  op: PredicateOp.NOTEQUALS,
                  string_value: ApiExperimentStorageState.ARCHIVED.toString(),
                },
              ]);
              const response = await Apis.experimentServiceApi.listExperiment(
                page_token,
                page_size,
                sort_by,
                encodeURIComponent(JSON.stringify(new_filter)),
                props.namespace ? 'NAMESPACE' : undefined,
                props.namespace,
              );
              return {
                nextPageToken: response.next_page_token || '',
                resources: response.experiments || [],
              };
            }}
            columns={EXPERIMENT_SELECTOR_COLUMNS}
            emptyMessage='No experiments found. Create an experiment and then try again.'
            initialSortColumn={ExperimentSortKeys.CREATED_AT}
            selectionChanged={(selectedExperiment: ApiExperiment) =>
              setPendingExperiment(selectedExperiment)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            id='cancelExperimentSelectionBtn'
            onClick={() => setExperimentSelectorOpen(false)}
            color='secondary'
          >
            Cancel
          </Button>
          <Button
            id='useExperimentBtn'
            onClick={() => {
              if (pendingExperiment && pendingExperiment.name) {
                props.setApiExperiment(pendingExperiment);
                setExperimentName(pendingExperiment.name);
              }
              setExperimentSelectorOpen(false);
            }}
            color='secondary'
            disabled={!pendingExperiment}
          >
            Use this experiment
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
