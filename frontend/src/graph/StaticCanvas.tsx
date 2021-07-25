import React from 'react';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Elements,
  MiniMap,
  ReactFlowProvider,
  Node,
} from 'react-flow-renderer';
import initialElements from './initial-elements';
import ZoomNode from './ZoomNode';

import CustomEdge from './CustomEdge';
import ColorSelectorNode from './ColorSelectorNode';
import SubNode from './SubNode';
import SubDagNamespace from './SubDagNamespace';

const edgeTypes = {
  custom: CustomEdge,
};
const nodeTypes = {
  colorSelectorNode: ColorSelectorNode,
  subNode: SubNode,
  zoom: ZoomNode,
  // default: wrapNode((nodeTypes.default || DefaultNode) as ComponentType<
  //   NodeComponentProps
  // >),
};

export interface StaticCanvas {
  elements: Elements;
  namespaces: string[];
  doubleClickNode: (node: Node) => void;
  setNamespaces: (namespaces: string[]) => void;
}

const StaticCanvas = ({ elements, namespaces, doubleClickNode, setNamespaces }: StaticCanvas) => {
  return (
    <>
      <SubDagNamespace namespaces={namespaces} setNamespaces={setNamespaces}></SubDagNamespace>
      <ReactFlowProvider>
        <ReactFlow
          style={{ background: '#f2f2f2' }}
          elements={elements}
          snapToGrid={true}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          key='edges'
          onElementClick={(event, element) => {
            console.log(event);
            console.log(element);
          }}
          onNodeDoubleClick={(event, element) => {
            doubleClickNode(element as Node);
          }}
        >
          <MiniMap />
          <Controls />
          <Background variant={BackgroundVariant.Dots} />
        </ReactFlow>
      </ReactFlowProvider>
    </>
  );
};
export default StaticCanvas;
