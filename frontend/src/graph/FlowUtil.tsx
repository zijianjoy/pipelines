import { Edge, Elements, FlowElement, Node, isNode, Position } from 'react-flow-renderer';
import { PipelineSpec } from 'src/third_party/pipeline_spec';
import dagre from 'dagre';

const nodeWidth = 140;
const nodeHeight = 100;

function convertToFlowElements(spec: PipelineSpec): Elements {
  let result: FlowElement[] = [];
  const componentToTask: Map<string, string> = new Map();

  // Find all tasks --> nodes
  const root = spec.getRoot();
  if (!root) {
    throw new Error('root not found in pipeline spec.');
  }
  const dag = root.getDag();
  if (!dag) {
    throw new Error('dag not found in pipeline spec.');
  }
  const tasksMap = dag.getTasksMap();
  console.log('tasksMap ' + tasksMap.getLength());
  tasksMap.forEach((taskSpec, key) => {
    const name = taskSpec?.getTaskInfo()?.getName();
    console.log(name);
    const node: Node = {
      id: 'task-' + key,
      data: { label: name },
      position: { x: 100, y: 200 },
      style: {
        color: 'white',
        backgroundColor: '#00BBF9',
        borderColor: 'transparent',
        borderRadius: '30px',
      },
    };
    result.push(node);
    const componentRef = taskSpec.getComponentRef();
    if (!!componentRef) {
      componentToTask.set(componentRef.getName(), key);
    }
  });

  // Find all artifacts --> nodes with custom style
  // Input: components -> key/value -> inputDefinitions -> artifacts -> name/key
  // Output: components -> key/value -> outputDefinitions -> artifacts -> name/key
  // Calculate Output for now.
  const components = spec.getComponentsMap();
  components.forEach((componentSpec, componentKey) => {
    const outputDefinitions = componentSpec.getOutputDefinitions();
    if (!outputDefinitions) return;
    const artifacts = outputDefinitions.getArtifactsMap();
    artifacts.forEach((artifactSpec, artifactKey) => {
      const node: Node = {
        // id is combination of producerTask+outputArtifactKey
        id: 'artifact-' + componentToTask.get(componentKey) + '-' + artifactKey,
        data: { label: artifactSpec.getArtifactType()?.getSchemaTitle() + ': ' + artifactKey },
        position: { x: 300, y: 200 },
        style: { backgroundColor: '#fff59d', borderColor: 'transparent' }, // FF99C8  D0F4DE  E4C1F9
      };
      result.push(node);
    });
  });

  // Find output and input artifacts --> edges
  // Task to Artifact: components -> key/value -> outputDefinitions -> artifacts -> key
  components.forEach((componentSpec, componentKey) => {
    const outputDefinitions = componentSpec.getOutputDefinitions();
    if (!outputDefinitions) return;
    const artifacts = outputDefinitions.getArtifactsMap();
    artifacts.forEach((artifactSpec, artifactKey) => {
      const edge: Edge = {
        id: 'edge-' + componentToTask.get(componentKey) + '-' + artifactKey,
        source: 'task-' + componentToTask.get(componentKey),
        target: 'artifact-' + componentToTask.get(componentKey) + '-' + artifactKey,
        animated: true,
      };
      result.push(edge);
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
        target: 'task-' + inputTaskKey,
        animated: true,
      };
      result.push(edge);
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
          source: 'task-' + producerTask,
          target: 'task-' + inputTaskKey,
          animated: true,
        };
        result.push(edge);
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
        source: 'task-' + upStreamTaskName,
        target: 'task-' + inputTaskKey,
        animated: true,
      };
      result.push(edge);
      edgeKeys.set(edgeId, edge);
    });
  });

  // TODO
  // Find the task dependencies --> non-artifact edges

  // layout of graph

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'TB' });

  result.forEach(el => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  result = result.map(el => {
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

  return result;
}
export default { convertToFlowElements };
