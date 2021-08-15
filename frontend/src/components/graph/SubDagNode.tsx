import CropFreeIcon from '@material-ui/icons/CropFree';
import React, { useState } from 'react';
import ReactFlow, { Handle, Position } from 'react-flow-renderer';
import { classes } from 'typestyle';

interface SubDagNodeProps {
  data: any;
  selected: boolean;
  // id: string;
  // displayName: string;
  // status: ExecutionNodeStatus;
  // tooltip: string;
  // isSelected: boolean;
}

function SubDagNode({ data, selected }: SubDagNodeProps) {
  const highlightClass = selected ? ' border border-blue-500' : ' border ';
  return (
    <>
      <div
        className={classes(
          highlightClass,
          'rounded-xl container items-stretch h-24 w-80 relative border-2  border-gray-300 border-dashed grid ',
        )}
      >
        <div
          className={'flex justify-items-center place-self-center self-center relative h-14 w-72 '}
        >
          <div
            className={classes(
              ' flex justify-between flex-row transform h-14 transition relative overflow:hidden hover:scale-105 bg-white shadow-lg rounded-xl  w-72 z-10',
            )}
          >
            <div className='sm:px-4 sm:py-4 rounded-l-xl justify-items-center hover:shadow-inner '>
              <CropFreeIcon style={{ color: '#63B3ED' }} />
            </div>
            <div className='sm:px-6 sm:py-4 w-60 flex flex-col justify-center items-center '>
              <span className='w-full truncate ...' id={data.id}>
                {data.displayName}
              </span>
            </div>
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

export default SubDagNode;
