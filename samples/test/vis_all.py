

import kfp
from kfp import dsl
from kfp import components
from kfp.components import InputPath, OutputPath
from kfp.dsl.io_types import Artifact
from kfp.v2.dsl import Input, Output, Dataset, Model, component
import kfp.v2.compiler as compiler
from kfp.components import load_component_from_text, create_component_from_func


confusion_matrix_component = kfp.components.load_component_from_text("""
name: Confusion matrix
description: Calculates confusion matrix
inputs:
  - {name: Predictions,     type: GCSPath,        description: 'GCS path of prediction file pattern.'} # type: {GCSPath: {data_type: CSV}}
  - {name: Target lambda,   type: String, default: '', description: 'Text of Python lambda function which computes target value. For example, "lambda x: x[''a''] + x[''b'']". If not set, the input must include a "target" column.'}
  - {name: Output dir,      type: GCSPath,  description: 'GCS path of the output directory.'} # type: {GCSPath: {path_type: Directory}}
outputs:
  - {name: MLPipeline UI metadata, type: UI metadata}
  - {name: MLPipeline Metrics,     type: Metrics}
implementation:
  container:
    image: gcr.io/ml-pipeline/ml-pipeline-local-confusion-matrix:1.6.0
    command: [python3, /ml/confusion_matrix.py]
    args: [
      --predictions, {inputValue: Predictions},
      --target_lambda, {inputValue: Target lambda},
      --output,      {inputValue: Output dir},
      --ui-metadata-output-path, {outputPath: MLPipeline UI metadata},
      --metrics-output-path, {outputPath: MLPipeline Metrics},
    ]
""")

@component
def tensorboard_vis(mlpipeline_ui_metadata: Output[Artifact]):
  import json

  metadata = {
    'outputs' : [ {
      'type': 'web-app',
      'storage': 'inline',
      'source': '<h1>Hello, World!</h1>',
    }]
  }

  with open(mlpipeline_ui_metadata.path, 'w') as metadata_file:
    json.dump(metadata, metadata_file)

@dsl.pipeline(name='vis_all')
def pipeline(message: str = 'empty'):
    # visall_task = confusion_matrix_component(predictions='gs://jamxl-kfp-bucket/v2-compatible/dataset/confusion_matrix.csv', output_dir='gs://jamxl-kfp-bucket/v2-compatible/cm/')
    # visall_task()

    tensorboard_vis_task = tensorboard_vis()
    tensorboard_vis_task()
