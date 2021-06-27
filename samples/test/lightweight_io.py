# Copyright 2021 The Kubeflow Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# %%
# import yaml
# import os

# REPO_ROOT = os.path.join('..', '..')
# SAMPLES_CONFIG_PATH = os.path.join(REPO_ROOT, 'samples', 'test', 'config.yaml')
# SAMPLES_CONFIG = None
# with open(SAMPLES_CONFIG_PATH, 'r') as stream:
#     SAMPLES_CONFIG = yaml.safe_load(stream)

# import kfp
# import kfp.components as comp
# import json
# from typing import Optional

# MINUTE = 60  # seconds

# download_gcs_tgz = kfp.components.load_component_from_file(
#     'components/download_gcs_tgz.yaml'
# )
# run_sample = kfp.components.load_component_from_file(
#     'components/run_sample.yaml'
# )
# kaniko = kfp.components.load_component_from_file('components/kaniko.yaml')




"""Sample pipeline for passing data in KFP v2."""
from typing import Dict, List

from kfp import dsl
from kfp import components
from kfp.components import InputPath, OutputPath
from kfp.dsl.io_types import Artifact
from kfp.v2.dsl import Input, Output, Dataset, Model, component
import kfp.v2.compiler as compiler


@component
def preprocess(
    # An input parameter of type string.
    message: str,
    # Use Output[T] to get a metadata-rich handle to the output artifact
    # of type `Dataset`.
    output_dataset_one: Output[Dataset],
    # A locally accessible filepath for another output artifact of type
    # `Dataset`.
    output_dataset_two_path: OutputPath('Dataset'),
    # A locally accessible filepath for an output parameter of type string.
    output_parameter_path: OutputPath(str),
    # A locally accessible filepath for an output parameter of type bool.
    output_bool_parameter_path: OutputPath(bool),
    # A locally accessible filepath for an output parameter of type dict.
    output_dict_parameter_path: OutputPath(Dict[str, int]),
    # A locally accessible filepath for an output parameter of type list.
    output_list_parameter_path: OutputPath(List[str]),
):
  """Dummy preprocessing step"""

  # Use Dataset.path to access a local file path for writing.
  # One can also use Dataset.uri to access the actual URI file path.
  with open(output_dataset_one.path, 'w') as f:
    f.write(message)

  # OutputPath is used to just pass the local file path of the output artifact
  # to the function.
  with open(output_dataset_two_path, 'w') as f:
    f.write(message)

  with open(output_parameter_path, 'w') as f:
    f.write(message)

  with open(output_bool_parameter_path, 'w') as f:
    f.write(str(True))  # use either `str()` or `json.dumps()` for bool values.

  import json
  with open(output_dict_parameter_path, 'w') as f:
    f.write(json.dumps({'A': 1, 'B': 2}))

  with open(output_list_parameter_path, 'w') as f:
    f.write(json.dumps(['a', 'b', 'c']))


@component
def train(
    # Use InputPath to get a locally accessible path for the input artifact
    # of type `Dataset`.
    dataset_one_path: InputPath('Dataset'),
    # Use Input[T] to get a metadata-rich handle to the input artifact
    # of type `Dataset`.
    dataset_two: Input[Dataset],
    # An input parameter of type string.
    message: str,
    # Use Output[T] to get a metadata-rich handle to the output artifact
    # of type `Dataset`.
    model: Output[Model],
    # An input parameter of type bool.
    input_bool: bool,
    # An input parameter of type dict.
    input_dict: Dict[str, int],
    # An input parameter of type List[str].
    input_list: List[str],
    # An input parameter of type int with a default value.
    num_steps: int = 100,
):
  """Dummy Training step"""
  with open(dataset_one_path, 'r') as input_file:
    dataset_one_contents = input_file.read()

  with open(dataset_two.path, 'r') as input_file:
    dataset_two_contents = input_file.read()

  line = (f'dataset_one_contents: {dataset_one_contents} || '
          f'dataset_two_contents: {dataset_two_contents} || '
          f'message: {message} || '
          f'input_bool: {input_bool}, type {type(input_bool)} || '
          f'input_dict: {input_dict}, type {type(input_dict)} || '
          f'input_list: {input_list}, type {type(input_list)} \n')

  with open(model.path, 'w') as output_file:
    for i in range(num_steps):
      output_file.write('Step {}\n{}\n=====\n'.format(i, line))

  # Use model.get() to get a Model artifact, which has a .metadata dictionary
  # to store arbitrary metadata for the output artifact.
  model.metadata['accuracy'] = 0.9

@component
def visall(mlpipeline_ui_metadata: Output[Artifact]):
  # ROC Curve
  # Confusion Matrix
  # scalar
  # v1 metrics
  # markdown/html/confusion
  import json
    
  metadata = {
    'outputs' : [
    # Markdown that is hardcoded inline
    {
      'storage': 'inline',
      'source': '# Inline Markdown\n[A link](https://www.kubeflow.org/)',
      'type': 'markdown',
    }]
  }
  with open(mlpipeline_ui_metadata.path, 'w') as metadata_file:
    json.dump(metadata, metadata_file)
  
  


# @dsl.pipeline(
#     pipeline_root='gs://jamxl-kfp-bucket/v2/artifacts', name='lightweight_python_functions_v2_pipeline_beta')
@dsl.pipeline(name='pipeline-with-lightweight-io')
def pipeline(message: str = 'empty'):
    preprocess_task = preprocess(message=message)
    train_task = train(
        dataset_one=preprocess_task.outputs['output_dataset_one'],
        dataset_two=preprocess_task.outputs['output_dataset_two'],
        message=preprocess_task.outputs['output_parameter'],
        input_bool=preprocess_task.outputs['output_bool_parameter'],
        input_dict=preprocess_task.outputs['output_dict_parameter'],
        input_list=preprocess_task.outputs['output_list_parameter'],
        num_steps=5)
    visall_task = visall().after(train_task)



# def main(
#     context: str,
#     host: str,
#     gcr_root: str,
#     gcs_root: str,
#     experiment: str = 'v2_sample_test'
# ):
#     client = kfp.Client(host=host)
#     client.create_experiment(
#         name=experiment,
#         description='An experiment with Kubeflow Pipelines v2 sample test runs.'
#     )
#     run_result = client.create_run_from_pipeline_func(
#         pipeline, {
#             'context': context,
#             'launcher_destination': f'{gcr_root}/kfp-launcher',
#             'gcs_root': gcs_root,
#             'samples_destination': f'{gcr_root}/v2-sample-test',
#             'kfp_host': host,
#             'message': 'this_is_message'
#         },
#         experiment_name=experiment
#     )
#     print("Run details page URL:")
#     print(f"{host}/#/runs/details/{run_result.run_id}")
#     run_response = run_result.wait_for_run_completion(20 * MINUTE)
#     run = run_response.run
#     from pprint import pprint
#     # Hide verbose content
#     run_response.run.pipeline_spec.workflow_manifest = None
#     pprint(run_response.run)
#     print("Run details page URL:")
#     print(f"{host}/#/runs/details/{run_result.run_id}")
#     assert run.status == 'Succeeded'
#     # TODO(Bobgy): print debug info


# %%
# if __name__ == "__main__":
#     import fire
#     fire.Fire(main)



# @dsl.pipeline(name='pipeline-with-lightweight-io')
# def my_pipeline():
#     task1 = component_op(text='1st task')
#     task2 = component_op(text='2nd task').after(task1)
#     task3 = component_op(text='3rd task').after(task1, task2)


# if __name__ == '__main__':
#     compiler.Compiler().compile(
#         pipeline_func=pipeline,__file__ + '.yaml'
#     )
