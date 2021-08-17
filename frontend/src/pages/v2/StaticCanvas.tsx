/*
 * Copyright 2021 The Kubeflow Authors
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

import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  Elements,
  MiniMap,
  OnLoadParams,
  Node,
  ReactFlowProvider,
} from 'react-flow-renderer';
import ArtifactNode from 'src/components/graph/ArtifactNode';
import ExecutionNode from 'src/components/graph/ExecutionNode';
import SubDagNamespace from 'src/components/graph/SubDagNamespace';
import SubDagNode from 'src/components/graph/SubDagNode';
import { color } from 'src/Css';
import { TaskType } from 'src/lib/v2/StaticFlow';

const nodeTypes = {
  execution: ExecutionNode,
  artifact: ArtifactNode,
  subDag: SubDagNode,
};

export interface StaticCanvasProps {
  elements: Elements;
  namespaces: string[];
  setNamespaces: (namespaces: string[]) => void;
}

const StaticCanvas = ({ elements, namespaces, setNamespaces }: StaticCanvasProps) => {
  const onLoad = (reactFlowInstance: OnLoadParams) => {
    reactFlowInstance.fitView();
  };

  const doubleClickNode = (node: Node) => {
    if (node.data['taskType'] !== TaskType.DAG) {
      return;
    }
    const newNamespaces = [...namespaces, node.id.substr(5)]; //remove `task.`
    setNamespaces(newNamespaces);
  };

  return (
    <>
      <SubDagNamespace namespaces={namespaces} setNamespaces={setNamespaces}></SubDagNamespace>
      <div data-testid='StaticCanvas' style={{ width: '100%', height: '100%' }}>
        <ReactFlowProvider>
          <ReactFlow
            style={{ background: color.lightGrey }}
            elements={elements}
            snapToGrid={true}
            nodeTypes={nodeTypes}
            onLoad={onLoad}
            edgeTypes={{}}
            onNodeDoubleClick={(event, element) => {
              doubleClickNode(element);
            }}
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </>
  );
};
export default StaticCanvas;
