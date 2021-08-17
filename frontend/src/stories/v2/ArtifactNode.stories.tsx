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
import ArtifactNode from '../../components/graph/ArtifactNode';

import './ArtifactNode.css';

const nodeTypes = {
  artifact: ArtifactNode,
};

interface WrappedArtifactNodeProps {
  id: string;
  label: string;
}

function WrappedArtifactNode({ id, label }: WrappedArtifactNodeProps) {
  const onLoad = (reactFlowInstance: OnLoadParams) => {
    reactFlowInstance.fitView();
  };

  const elements = [
    {
      id: id,
      type: 'artifact',
      position: { x: 100, y: 100 },
      data: { label: label },
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
  title: 'v2/ArtifactNode',
  component: WrappedArtifactNode,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof WrappedArtifactNode>;

const Template: ComponentStory<typeof WrappedArtifactNode> = args => (
  <WrappedArtifactNode {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: 'id',
  label: 'This is an ArtifactNode',
};

export const Secondary = Template.bind({});
Secondary.args = {
  id: 'id',
  label: 'This is an ArtifactNode with long name',
};
