import jsyaml from 'js-yaml';
import React from 'react';
import { useQuery } from 'react-query';
import { ApiRunDetail } from 'src/apis/run';
import { RouteParams } from 'src/components/Router';
import { FeatureKey, isFeatureEnabled } from 'src/features';
import { Apis } from 'src/lib/Apis';
import { convertFlowElements } from 'src/lib/v2/StaticFlow';
import * as WorkflowUtils from 'src/lib/v2/WorkflowUtils';
import { getKfpV2RunContext } from 'src/mlmd/MlmdUtils';
import { Context } from 'src/third_party/mlmd';
import * as StaticGraphParser from '../lib/StaticGraphParser';
import EnhancedRunDetails, { RunDetailsProps } from './RunDetails';
import { RunDetailsV2 } from './RunDetailsV2';

export default function RunDetailsRouter(props: RunDetailsProps) {
  const runId = props.match.params[RouteParams.runId];
  console.log('run id ' + runId);

  // Retrieves
  const { isSuccess, error, data } = useQuery<ApiRunDetail, Error>(
    ['run_detail', { id: runId }],
    () => Apis.runServiceApi.getRun(runId),
    { staleTime: 30000 },
  );

  const { isSuccess: isContextSuccess, error: errorContext, data: context } = useQuery<
    Context,
    Error
  >(['run_context', { id: runId }], () => getKfpV2RunContext(runId), { staleTime: Infinity });

  if (
    data &&
    data.run &&
    data.run.pipeline_spec &&
    data.run.pipeline_spec.workflow_manifest &&
    context
  ) {
    // console.log(data.run.pipeline_spec.workflow_manifest);
    const isIR = isIrPipeline(data.run.pipeline_spec.workflow_manifest);
    if (isIR) {
      return (
        <RunDetailsV2
          pipeline_job={data.run.pipeline_spec.workflow_manifest}
          runId={runId}
          context={context}
        />
      );
    }
  }

  return <EnhancedRunDetails {...props} />;
}

function isIrPipeline(templateString: string) {
  if (!templateString) {
    return false;
  }
  try {
    const template = jsyaml.safeLoad(templateString);
    if (WorkflowUtils.isArgoWorkflowTemplate(template)) {
      StaticGraphParser.createGraph(template!);
      return false;
    } else if (isFeatureEnabled(FeatureKey.V2)) {
      const pipelineSpec = WorkflowUtils.convertJsonToV2PipelineSpec(templateString);
      convertFlowElements(pipelineSpec);
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}
