// Copyright 2021 The Kubeflow Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import MD2Tabs from 'src/atoms/MD2Tabs';
import { commonCss, padding } from 'src/Css';
import { getStatefulFlowElements } from 'src/lib/v2/DynamicFlow';
import { convertFlowElements } from 'src/lib/v2/StaticFlow';
import * as WorkflowUtils from 'src/lib/v2/WorkflowUtils';
import {
  getActifactsFromtContext,
  getEventByExecution,
  getEventsByExecutions,
  getExecutionsFromContext,
  getRunContext,
} from 'src/mlmd/MlmdUtils';
import { Context, Execution, Event, Artifact } from 'src/third_party/mlmd';
import { classes } from 'typestyle';
import StaticCanvas from './v2/StaticCanvas';
interface RunDetailsV2Props {
  pipeline_job: string;
  runId: string;
  context: Context;
}

export function RunDetailsV2(props: RunDetailsV2Props) {
  const pipelineJobStr = props.pipeline_job;

  const pipelineSpec = WorkflowUtils.convertJsonToV2PipelineSpec(pipelineJobStr);
  const elements = convertFlowElements(pipelineSpec);

  const [flowElements, setFlowElements] = useState(elements);

  const { isSuccess: execSuccess, error: errorExecs, data: executions } = useQuery<
    Execution[],
    Error
  >(['execution_list', { id: props.context }], () => getExecutionsFromContext(props.context), {
    staleTime: 30000,
  });
  const { isSuccess: eventSuccess, error: errorEvents, data: events } = useQuery<Event[], Error>(
    ['event_list', { executions: executions }],
    () => getEventsByExecutions(executions),
    {
      staleTime: 30000,
    },
  );
  const { isSuccess: artifactSuccess, error: errorArtifact, data: artifacts } = useQuery<
    Artifact[],
    Error
  >(['artifact_list', { id: props.context }], () => getActifactsFromtContext(props.context), {
    staleTime: 30000,
  });

  if (executions && events && artifacts) {
    setFlowElements(getStatefulFlowElements(flowElements, executions, events, artifacts));
  }

  // TODO: Update elements when layers change.
  const layerChange = (layers: string[]) => {};

  return (
    <div className={classes(commonCss.page, padding(20, 't'))}>
      {
        <div className={commonCss.page}>
          <MD2Tabs
            selectedTab={0}
            tabs={['Graph', 'Run output', 'Config']}
            onSwitch={(tab: number) => null}
          />

          <div className={commonCss.page}>
            <StaticCanvas
              layers={[]}
              onLayersUpdate={layerChange}
              elements={flowElements}
            ></StaticCanvas>
          </div>
        </div>
      }
    </div>
  );
}
