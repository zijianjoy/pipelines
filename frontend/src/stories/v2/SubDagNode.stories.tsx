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
import { color } from 'src/Css';
import SubDagNode from '../../components/graph/SubDagNode';

import './SubDagNode.css';

const nodeTypes = {
  subDag: SubDagNode,
};

interface WrappedSubDagNodeProps {
  id: string;
  label: string;
}

function WrappedSubDagNode({ id, label }: WrappedSubDagNodeProps) {
  const onLoad = (reactFlowInstance: OnLoadParams) => {
    reactFlowInstance.fitView();
  };

  const elements = [
    {
      id: id,
      type: 'subDag',
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
  title: 'v2/SubDagNode',
  component: WrappedSubDagNode,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WrappedSubDagNode>;

const Template: ComponentStory<typeof WrappedSubDagNode> = args => <WrappedSubDagNode {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'id',
  label: 'This is a SubDagNode',
};

export const Secondary = Template.bind({});
Secondary.args = {
  id: 'id',
  label: 'This is a SubDagNode with long name',
};
