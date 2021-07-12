import React from 'react';
import ReactFlow, { Background, Controls, Elements, MiniMap } from 'react-flow-renderer';
import initialElements from './initial-elements';

import CustomEdge from './CustomEdge';

const edgeTypes = {
  custom: CustomEdge,
};

export interface StaticCanvas {
  elements: Elements;
}

const StaticCanvas = ({ elements }: StaticCanvas) => {
  return (
    <ReactFlow elements={elements} snapToGrid={true} edgeTypes={edgeTypes} key='edges'>
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};
export default StaticCanvas;
