import { SelectedNodeInfo } from './StaticGraphParser';

import * as dagre from 'dagre';
import { Template, Workflow } from '../../third_party/argo-ui/argo_template';
import { color } from '../Css';
import { Constants } from './Constants';
import { logger } from './Utils';
import { parseTaskDisplayName } from './ParserUtils';
import { graphlib } from 'dagre';

import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';

class PipelineTaskNode {
  parentNodes: Set<PipelineTaskNode>;
  childNodes: Set<PipelineTaskNode>;
  name: string;
  nodeInfo: SelectedNodeInfo;
}

class PipelineDependencyGraph {
  nodes: Map<string, PipelineTaskNode>;

  constructor() {
    this.nodes = new Map<string, PipelineTaskNode>();
  }
}

class DagNode {}

export function buildPipelineDependencyGraph(pipelineJob: any): PipelineDependencyGraph {
  const dependencyGraph = new PipelineDependencyGraph();

  if (!pipelineJob['pipelineSpec']['root']['dag']) {
    throw new Error('Could not generate graph. Provided Pipeline had no components.');
  }

  const dag = pipelineJob['pipelineSpec']['root']['dag'];
  const tasks = dag['tasks'];

  for (let taskKey in tasks) {
    let node = new PipelineTaskNode();
    node.name = taskKey;
    node.childNodes = new Set();
    node.parentNodes = new Set();
    const nodeInfo = new SelectedNodeInfo();
    _populateInfoFromTask(nodeInfo, tasks[taskKey]);
    node.nodeInfo = nodeInfo;
    dependencyGraph.nodes.set(taskKey, node);
  }

  for (let taskKey in tasks) {
    let task = tasks[taskKey];
    if (
      task['inputs'] &&
      task['inputs']['task_output_artifact'] &&
      task['inputs']['task_output_artifact']['producer_task']
    ) {
      let producer_task = task['inputs']['task_output_artifact']['producer_task'];
      if (dependencyGraph.nodes.has(producer_task)) {
        let parentNode = dependencyGraph.nodes.get(producer_task);
        let childNode = dependencyGraph.nodes.get(taskKey);
        if (parentNode && childNode) {
          parentNode.childNodes.add(childNode);
          childNode.parentNodes.add(parentNode);
        }
      }
    }
  }

  return dependencyGraph;
}

export function _populateInfoFromTask(info: SelectedNodeInfo, task?: any): SelectedNodeInfo {
  // TODO: Needs to revisit this logic for detail conditioning.
  // if (!template || (!template.container && !template.resource)) {
  //   return info;
  // }

  // if (template.container) {
  //   info.nodeType = 'container';
  //   info.args = template.container.args || [];
  //   info.command = template.container.command || [];
  //   info.image = template.container.image || '';
  //   info.volumeMounts = (template.container.volumeMounts || []).map(v => [v.mountPath, v.name]);
  // } else {
  //   info.nodeType = 'resource';
  //   if (template.resource && template.resource.action && template.resource.manifest) {
  //     info.resource = [[template.resource.action, template.resource.manifest]];
  //   } else {
  //     info.resource = [[]];
  //   }
  // }

  // if (template.inputs) {
  //   info.inputs = (template.inputs.parameters || []).map(p => [p.name, p.value || '']);
  // }
  // if (template.outputs) {
  //   info.outputs = (template.outputs.parameters || []).map(p => {
  //     let value = '';
  //     if (p.value) {
  //       value = p.value;
  //     } else if (p.valueFrom) {
  //       value =
  //         p.valueFrom.jqFilter ||
  //         p.valueFrom.jsonPath ||
  //         p.valueFrom.parameter ||
  //         p.valueFrom.path ||
  //         '';
  //     }
  //     return [p.name, value];
  //   });
  // }

  return info;
}

export function createGraphIR(pipelineJob: any): dagre.graphlib.Graph {
  // create a graph

  // validate that the IR spec has the DAG info

  // for each template
  //   populate info
  //   set a node
  //

  const graph = new dagreD3.graphlib.Graph({ compound: true });
  graph.setGraph({});
  graph.setDefaultEdgeLabel(() => ({}));

  if (!pipelineJob['pipelineSpec']['root']['dag']) {
    throw new Error('Could not generate graph. Provided Pipeline had no components.');
  }

  const dag = pipelineJob['pipelineSpec']['root']['dag'];
  const tasks = dag['tasks'];
  // ui pipeline spec proto
  // cast pipeline job to pipeline ui job
  // compile

  const dependencyGraph = buildPipelineDependencyGraph(pipelineJob);

  // const templates = new Map<string, { nodeType: nodeType; template: Template }>();
  for (var taskKey in tasks) {
    // const taskSpec = tasks[taskKey];

    const nodeInfo = dependencyGraph.nodes.get(taskKey)?.nodeInfo;
    graph.setNode(taskKey, {
      bgColor: color.lightGrey,
      height: Constants.NODE_HEIGHT,
      nodeInfo,
      label: 'template - ' + taskKey,
      width: Constants.NODE_WIDTH,
      clusterLabelPos: 'top',
      style: 'fill: #d3d7e8',
    });

    // TODO
    // set teamplates with container/resource/dag types.
    //
  }

  // to be uncomment
  // for(let taskKey in dependencyGraph.nodes) {
  //   let taskNode = dependencyGraph.nodes.get(taskKey);
  //   if(taskNode?.parentNodes && taskNode.parentNodes.size > 0) {
  //     continue;
  //   } else {
  //     buildDag(graph, taskKey, templates, new Map(), '');
  //   }
  // }

  // TODO: hand-build pipeline by users if there is only one entrypoint node but no graph.
  //
  // if (graph.nodeCount() === 0) {
  //   const entryPointTemplate = workflowTemplates.find(t => t.name === workflow.spec.entrypoint);
  //   if (entryPointTemplate) {
  //     graph.setNode(entryPointTemplate.name, {
  //       height: Constants.NODE_HEIGHT,
  //       label: entryPointTemplate.name,
  //       width: Constants.NODE_WIDTH,
  //     });
  //   }
  // }

  return graph;
}
