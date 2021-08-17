import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  OnLoadParams,
  ReactFlowProvider,
} from 'react-flow-renderer';
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

interface WrappedExecutionNodeProps {
  id: string;
  label: string;
}

function WrappedExecutionNode({ id, label }: WrappedExecutionNodeProps) {
  const onLoad = (reactFlowInstance: OnLoadParams) => {
    reactFlowInstance.fitView();
  };

  const elements = [
    {
      id: id,
      type: 'execution',
      position: { x: 100, y: 100 },
      data: { label },
    },
  ];

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
          onLoad={onLoad}
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
  title: 'v2/ExecutionNode',
  component: WrappedExecutionNode,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WrappedExecutionNode>;

const Template: ComponentStory<typeof WrappedExecutionNode> = args => (
  <WrappedExecutionNode {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: 'id',
  label: 'This is an ExecutionNode',
};

export const Secondary = Template.bind({});
Secondary.args = {
  id: 'id',
  label: 'This is an ExecutionNode with long name',
};
