import { SelectedNodeInfo } from "./StaticGraphParser";


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

class DagNode {
}

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
    if (task['inputs'] && task['inputs']['task_output_artifact']
     && task['inputs']['task_output_artifact']['producer_task']) {
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


export function _populateInfoFromTask(
    info: SelectedNodeInfo,
    task?: any,
  ): SelectedNodeInfo {
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