import { Edge, Elements, FlowElement, Node, isNode, Position } from 'react-flow-renderer';
import { PipelineSpec } from 'src/third_party/pipeline_spec';
import dagre from 'dagre';
import {
  ComponentRef,
  ComponentSpec,
  DagSpec,
} from 'src/third_party/pipeline_spec/pipeline_spec_pb';
import * as jspb from 'google-protobuf';

const nodeWidth = 140;
const nodeHeight = 100;

export enum TaskType {
  EXECUTOR,
  DAG,
}

function convertToFlowElements(spec: PipelineSpec): Elements {
  // Find all tasks --> nodes
  const root = spec.getRoot();
  if (!root) {
    throw new Error('root not found in pipeline spec.');
  }

  return buildDag(spec, root);
}

function convertSubDagToFlowElements(spec: PipelineSpec, namespaces: string[]): Elements {
  let componentSpec = spec.getRoot();
  if (!componentSpec) {
    throw new Error('root not found in pipeline spec.');
  }

  const componentsMap = spec.getComponentsMap();
  for (let index = 1; index < namespaces.length; index++) {
    const dag: DagSpec = componentSpec!.getDag()!;
    const tasksMap = dag!.getTasksMap();
    const pipelineTaskSpec = tasksMap.get(namespaces[index]);
    const componetRef = pipelineTaskSpec?.getComponentRef();
    const componentName = componetRef?.getName();
    componentSpec = componentsMap.get(componentName!);
    if (!componentSpec) {
      throw new Error(pipelineTaskSpec?.getTaskInfo()?.getName() + ' not found in pipeline spec.');
    }
  }

  return buildDag(spec, componentSpec!);
}

function buildDag(pipelineSpec: PipelineSpec, componentSpec: ComponentSpec): Elements {
  const componentsMap = pipelineSpec.getComponentsMap();
  let flowGraph: FlowElement[] = [];
  const componentToTask: Map<string, string> = new Map();

  const dag = componentSpec.getDag();
  if (!dag) {
    throw new Error('dag not found in pipeline spec.');
  }
  const tasksMap = dag.getTasksMap();
  console.log('tasksMap ' + tasksMap.getLength());
  tasksMap.forEach((taskSpec, key) => {
    const name = taskSpec?.getTaskInfo()?.getName();
    console.log(name);
    const componentRef = taskSpec.getComponentRef();
    if (componentRef === undefined) {
      console.log('ComponentRef not found for task: ' + key);
      return;
    }
    const componentRefName = componentRef.getName();
    if (!componentsMap.has(componentRefName)) {
      console.log('Cannot find componentRef name from components Map: ' + componentRefName);
      return;
    }
    componentToTask.set(componentRefName, key);
    const component = componentsMap.get(componentRefName);
    if (component === undefined) {
      console.log('Component undefined for componentRef name: ' + componentRefName);
      return;
    }
    // Component can be either an executor or subDAG,
    // If this is executor, add the node directly.
    // If subDAG, needs to handle differently.
    if (component.getExecutorLabel().length > 0) {
      // executor label means this is a single node.
      const node: Node = {
        id: key,
        data: { label: name, taskType: TaskType.EXECUTOR },
        // data: { onChange: onChange, color: '#111111' },
        position: { x: 100, y: 200 },
        style: {
          color: 'white',
          backgroundColor: '#00BBF9',
          borderColor: 'transparent',
          borderRadius: '30px',
        },
        // type: 'subNode',
        // type: 'wrapNode',
      };
      flowGraph.push(node);
    } else if (component.hasDag()) {
      const node: Node = {
        id: key,
        data: { label: 'DAG: ' + name, taskType: TaskType.DAG },
        // data: { onChange: onChange, color: '#111111' },
        position: { x: 100, y: 200 },
        style: {},
      };
      flowGraph.push(node);
      // buildSubDag(componentRefName, component, componentsMap, 'root/', flowGraph);
    } else {
      console.log('Component ' + componentRefName + ' neither has `executorLabel` nor `dag`');
    }
  });

  // Find all artifacts --> nodes with custom style
  // Input: components -> key/value -> inputDefinitions -> artifacts -> name/key
  // Output: components -> key/value -> outputDefinitions -> artifacts -> name/key
  // Calculate Output for now.
  componentsMap.forEach((componentSpec, componentKey) => {
    const outputDefinitions = componentSpec.getOutputDefinitions();
    if (!outputDefinitions) return;
    const artifacts = outputDefinitions.getArtifactsMap();
    artifacts.forEach((artifactSpec, artifactKey) => {
      const node: Node = {
        // id is combination of producerTask+outputArtifactKey
        id: 'artifact-' + componentToTask.get(componentKey) + '-' + artifactKey,
        data: { label: artifactSpec.getArtifactType()?.getSchemaTitle() + ': ' + artifactKey },
        position: { x: 300, y: 200 },
        style: {
          backgroundColor: '#fff59d',
          borderColor: 'transparent',
          // position: 'relative',
          // width: '20%',
          // height: '0',
        }, // FF99C8  D0F4DE  E4C1F9
      };
      flowGraph.push(node);
    });
  });

  // Find output and input artifacts --> edges
  // Task to Artifact: components -> key/value -> outputDefinitions -> artifacts -> key
  componentsMap.forEach((componentSpec, componentKey) => {
    const outputDefinitions = componentSpec.getOutputDefinitions();
    if (!outputDefinitions) return;
    const artifacts = outputDefinitions.getArtifactsMap();
    artifacts.forEach((artifactSpec, artifactKey) => {
      const edge: Edge = {
        id: 'edge-' + componentToTask.get(componentKey) + '-' + artifactKey,
        source: componentToTask.get(componentKey)!,
        target: 'artifact-' + componentToTask.get(componentKey) + '-' + artifactKey,
        animated: true,
      };
      flowGraph.push(edge);
    });
  });
  // Artifact to Task: root -> dag -> tasks -> key/value -> inputs -> artifacts -> key/value
  //                   -> taskOutputArtifact -> outputArtifactKey+producerTask
  tasksMap.forEach((taskSpec, inputTaskKey) => {
    const inputs = taskSpec.getInputs();
    if (!inputs) {
      return;
    }
    const artifacts = inputs.getArtifactsMap();
    artifacts.forEach((artifactSpec, artifactKey) => {
      const taskOutputArtifact = artifactSpec.getTaskOutputArtifact();
      if (!taskOutputArtifact) {
        return;
      }
      const outputArtifactKey = taskOutputArtifact.getOutputArtifactKey();
      const producerTask = taskOutputArtifact.getProducerTask();
      const edge: Edge = {
        // id is combination of artifact+inputTask
        id: 'edge-' + outputArtifactKey + '-' + inputTaskKey,
        source: 'artifact-' + producerTask + '-' + outputArtifactKey,
        target: inputTaskKey,
        animated: true,
      };
      flowGraph.push(edge);
    });
  });

  const edgeKeys = new Map<String, Edge>();
  // Input Parameters: inputs => parameters => taskOutputParameter => producerTask
  tasksMap.forEach((taskSpec, inputTaskKey) => {
    const inputs = taskSpec.getInputs();
    if (!inputs) {
      return;
    }
    const parameters = inputs.getParametersMap();
    parameters.forEach((paramSpec, paramName) => {
      const taskOutputParameter = paramSpec.getTaskOutputParameter();
      if (taskOutputParameter) {
        const producerTask = taskOutputParameter.getProducerTask();
        const edgeId = 'edge-' + producerTask + '-' + inputTaskKey;
        if (edgeKeys.has(edgeId)) {
          return;
        }

        const edge: Edge = {
          // id is combination of producerTask+inputTask
          id: edgeId,
          source: producerTask,
          target: inputTaskKey,
          animated: true,
        };
        flowGraph.push(edge);
        edgeKeys.set(edgeId, edge);
      }
    });
  });

  // DependentTasks: task => dependentTasks list
  tasksMap.forEach((taskSpec, inputTaskKey) => {
    const dependentTasks = taskSpec.getDependentTasksList();
    if (!dependentTasks) {
      return;
    }
    dependentTasks.forEach(upStreamTaskName => {
      const edgeId = 'edge-' + upStreamTaskName + '-' + inputTaskKey;
      if (edgeKeys.has(edgeId)) {
        return;
      }

      const edge: Edge = {
        // id is combination of producerTask+inputTask
        id: edgeId,
        source: upStreamTaskName,
        target: inputTaskKey,
        animated: true,
      };
      flowGraph.push(edge);
      edgeKeys.set(edgeId, edge);
    });
  });

  // TODO
  // Find the task dependencies --> non-artifact edges

  // layout of graph

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'TB' });

  flowGraph.forEach(el => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  flowGraph = flowGraph.map(el => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.sourcePosition = Position.Bottom;
      el.targetPosition = Position.Top;

      // unfortunately we need this little hack to pass a slightly different position
      // to notify react flow about the change. Moreover we are shifting the dagre node position
      // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
      el.position = {
        x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    }
    return el;
  });

  return flowGraph;
}

function buildSubDag(
  componentName: string,
  componentSpec: ComponentSpec,
  componentsMap: jspb.Map<string, ComponentSpec>,
  namespace: string,
  flowGraph: FlowElement[],
) {
  const dag = componentSpec.hasDag();
  // Iterates taskMap for all tasks within subDAG.

  // Nodes:
  // 1. Create subDAG entry node
  // Add task node with prefix, prefix is layered with ancestor component names.
  // Example: root/component1/component2/
  //     Determine the type of this sub DAG:
  //          1. if condition
  //          2. for loop
  //          3. another pipeline.
  // 2. Create subDAG exit node
  const entryNode: Node = {
    id: namespace + 'componententry-' + componentName,
    data: { label: 'Component Entry: ' + componentName },
    position: { x: 300, y: 200 },
    style: {}, // FF99C8  D0F4DE  E4C1F9
  };
  const exitNode: Node = {
    id: namespace + 'componentexit-' + componentName,
    data: { label: 'Component Exit: ' + componentName },
    position: { x: 300, y: 200 },
    style: {}, // FF99C8  D0F4DE  E4C1F9
  };
  flowGraph.push(entryNode);
  flowGraph.push(exitNode);

  // Iterate:
  // Find componentRef for each task.
  // If componentRef is a exectuorLabel, draw a node.
  // If componentRef is a DAG:
  //     Create output artifact nodes
  //     Call buildSubDag iteratively. (need to think more on boundary cases)

  // Edges:
  // From outside the DAG component to inside:
  // parameters(executions) and artifact  => subDAG entry component
  // subDAG entry component               => output artifact and parameter(executions)
  // parameters(executions) and artifact  => subDAG exit component
  // subDAG exit component                => exterior artifact and parameter(executions)

  // How do we pass the output artifact and parameter to exterior nodes?

  // We might want to draw a loop around entry node and exit node, so we can signal a sub-DAG area on canvas.
}

export default { convertToFlowElements, convertSubDagToFlowElements };
