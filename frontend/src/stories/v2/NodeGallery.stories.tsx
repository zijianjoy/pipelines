import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ReactFlow, { Background, Controls, MiniMap, ReactFlowProvider } from 'react-flow-renderer';
import 'src/build/tailwind.output.css';
import ExecutionNodeFailed from 'src/components/graph/ExecutionNodeFailed';
import ExecutionNodePending from 'src/components/graph/ExecutionNodePending';
import { color } from 'src/Css';
import ExecutionNode from '../../components/graph/ExecutionNode';

import './ExecutionNode.css';

const nodeTypes = {
  execution: ExecutionNode,
  executionPending: ExecutionNodePending,
  executionFailed: ExecutionNodeFailed,
};

const elements = [
  {
    id: '2',
    type: 'execution',
    position: { x: 100, y: 100 },
    data: { text: 'An execution node' },
  },
  {
    id: '3',
    type: 'executionPending',
    position: { x: 100, y: 200 },
    data: { text: 'A pending node' },
  },
  {
    id: '4',
    type: 'executionFailed',
    position: { x: 100, y: 300 },
    data: { text: 'A failed node' },
  },
];

function WrappedNodeGallery({}) {
  return (
    <div
      // className='flex container mx-auto'
      data-testid='StaticCanvas'
      style={{ width: '1200px', height: '600px' }}
    >
      <ReactFlowProvider>
        <ReactFlow
          style={{ background: '#F5F5F5' }}
          elements={elements}
          snapToGrid={true}
          nodeTypes={nodeTypes}
          edgeTypes={{}}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default {
  title: 'v2/NodeGallery',
  component: WrappedNodeGallery,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WrappedNodeGallery>;

const Template: ComponentStory<typeof WrappedNodeGallery> = args => (
  <WrappedNodeGallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: 'id',
  displayName: 'This is an ExecutionNode',
};

export const Secondary = Template.bind({});
Secondary.args = {
  id: 'id',
  displayName: 'This is an ExecutionNode',
};
