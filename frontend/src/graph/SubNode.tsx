import React, { ReactFragment } from 'react';
import ReactFlow, { Background, Controls, Elements, MiniMap } from 'react-flow-renderer';
import initialElements from './initial-elements';

const elements: Elements = [
  {
    id: '3',
    type: 'output',
    data: { label: 'Output A' },
    position: { x: 650, y: 25 },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Output B' },
    position: { x: 650, y: 100 },
  },
];
const SubNode: ReactFragment = () => {
  return <ReactFlow elements={elements} snapToGrid={true} key='some'></ReactFlow>;
};
export default SubNode;
