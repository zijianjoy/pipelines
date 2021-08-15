import FolderIcon from '@material-ui/icons/Folder';
import React, { useState } from 'react';
import ReactFlow, { Handle, Position } from 'react-flow-renderer';
import { classes } from 'typestyle';

interface ArtifactNodeProps {
  data: any;
  selected: boolean;
  // id: string;
  // displayName: string;
  // status: ExecutionNodeStatus;
  // tooltip: string;
  // isSelected: boolean;
}

function ArtifactNode({ data, selected }: ArtifactNodeProps) {
  const highlightClass = selected ? ' border border-blue-500' : ' border ';

  return (
    <>
      <div className='container w-72 h-full'>
        <div
          className={classes(
            highlightClass,
            'focus:ring flex justify-between flex-row transform h-14 hover:scale-105 transition relative overflow:hidden bg-white shadow-lg w-72',
          )}
        >
          <div className='sm:px-4 sm:py-4 ' style={{ backgroundColor: '#ffff81' }}>
            <FolderIcon style={{ color: '#ffb300' }} />
          </div>
          <div className='sm:px-6 sm:py-4 w-60 flex flex-col justify-center items-center'>
            <span className='w-full truncate ...' id={data.id}>
              {data.displayName}
            </span>
          </div>
        </div>
      </div>
      <Handle
        type='target'
        position={Position.Top}
        isValidConnection={connection => connection.source === 'some-id'}
        onConnect={params => console.log('handle onConnect', params)}
        style={{ background: '#000', width: '4px', height: '6px' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        isValidConnection={connection => connection.source === 'some-id'}
        onConnect={params => console.log('handle onConnect', params)}
        style={{ background: '#000', width: '4px', height: '6px' }}
      />
    </>
  );
}

export default ArtifactNode;
