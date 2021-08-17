import DoneIcon from '@material-ui/icons/Done';
import React, { useState } from 'react';
import ReactFlow, { Handle, Position } from 'react-flow-renderer';
import { classes } from 'typestyle';

enum ExecutionNodeStatus {
  UNSPECIFIED = 'UNSPECIFIED',
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
  SUCCEEDED = 'SUCCEEDED',
  CANCELLING = 'CANCELLING',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  SKIPPED = 'SKIPPED',
  NOT_READY = 'NOT_READY', // TBD: Represent QUEUED, NOT_TRIGGERED and UNSCHEDULABLE
}

// onclick event

interface ExecutionNodeProps {
  id: string;
  data: any;
  selected: boolean;
  // id: string;
  // displayName: string;
  // status: ExecutionNodeStatus;
  // tooltip: string;
  // isSelected: boolean;
}

function ExecutionNode({ id, data, selected }: ExecutionNodeProps) {
  const highlightClass = selected ? ' border border-blue-500' : ' border ';

  return (
    <>
      <div className='container w-60'>
        <div
          className={classes(
            highlightClass,
            'focus:ring flex justify-between flex-row transform h-14 hover:scale-105 transition relative overflow:hidden bg-white shadow-lg rounded-xl w-60',
          )}
        >
          <div className='sm:px-3 sm:py-4 w-48 flex justify-center items-center'>
            <span className='w-full text-sm truncate ...' id={id}>
              {data.label}
            </span>
          </div>
          <div className='sm:px-2 sm:py-3 sm:rounded-r-xl' style={{ backgroundColor: '#e6f4ea' }}>
            <DoneIcon style={{ color: '#34a853' }} />
          </div>
        </div>
      </div>
      <Handle
        type='target'
        position={Position.Top}
        isValidConnection={connection => connection.source === 'some-id'}
        onConnect={params => console.log('handle onConnect', params)}
        style={{ background: '#000', width: '4px', height: '4px' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        isValidConnection={connection => connection.source === 'some-id'}
        onConnect={params => console.log('handle onConnect', params)}
        style={{ background: '#000', width: '4px', height: '4px' }}
      />
    </>
  );
}

export default ExecutionNode;
