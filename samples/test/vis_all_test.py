

from .vis_all import pipeline
from .util import run_pipeline_func, TestCase

import kfp

run_pipeline_func([TestCase(pipeline_func=pipeline,
            mode=kfp.dsl.PipelineExecutionMode.V2_COMPATIBLE,
            arguments={
                kfp.dsl.ROOT_PARAMETER_NAME:
                    'minio://mlpipeline/override/artifacts'
            })])
