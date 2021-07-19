import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  Elements,
  MiniMap,
  ReactFlowProvider,
} from 'react-flow-renderer';
import initialElements from './initial-elements';

import CustomEdge from './CustomEdge';
import ColorSelectorNode from './ColorSelectorNode';
import SubNode from './SubNode';

const edgeTypes = {
  custom: CustomEdge,
};
const nodeTypes = {
  colorSelectorNode: ColorSelectorNode,
  subNode: SubNode,
};

export interface StaticCanvas {
  elements: Elements;
}

const StaticCanvas = ({ elements }: StaticCanvas) => {
  return (
    <ReactFlowProvider>
      <ReactFlow
        elements={elements}
        snapToGrid={true}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        key='edges'
      >
        <MiniMap />
        <Controls />
        {/* <Background /> */}
      </ReactFlow>
    </ReactFlowProvider>
  );
};
export default StaticCanvas;
