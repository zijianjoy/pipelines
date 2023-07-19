// Copyright 2022 The Kubeflow Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package util

import (
	"context"
	"plugin"
	"time"

	argoclient "github.com/argoproj/argo-workflows/v3/pkg/client/clientset/versioned"
	argoinformer "github.com/argoproj/argo-workflows/v3/pkg/client/informers/externalversions"
	"github.com/cenkalti/backoff"
	"github.com/golang/glog"
	"github.com/pkg/errors"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/apimachinery/pkg/types"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/cache"
)

type ExecutionSpecList []ExecutionSpec

// ExecutionClient is used to get a ExecutionInterface in specific namespace scope
type ExecutionClient interface {
	Execution(namespace string) ExecutionInterface
}

// Mini version of ExecutionSpec informer
// only contains functions that are needed in current code base
// ExecutionInformerEventHandler only has AddEventHandler function
// ExecutionInformer has all functions we need in current code base
type ExecutionInformerEventHandler interface {
	AddEventHandler(funcs cache.ResourceEventHandler)
}
type ExecutionInformer interface {
	ExecutionInformerEventHandler
	// returns the HasSynced function of the informer
	// HasSynced returns true if the shared informer's store has been
	// informed by at least one full LIST of the authoritative state
	// of the informer's object collection.  This is unrelated to "resync".
	HasSynced() func() bool
	// Use Lister interface to get a specific ExecutionSpec under a namespace
	// second return value indicates if no ExecutionSpec is found
	Get(namespace string, name string) (ExecutionSpec, bool, error)
	// List all ExecutionSpecs that match the label selector
	List(labels *labels.Selector) (ExecutionSpecList, error)
	// Start initializes the informer.
	InformerFactoryStart(stopCh <-chan struct{})
}

// ExecutionInterface has methods to work with Execution resources.
type ExecutionInterface interface {
	// Create an ExecutionSpec
	Create(ctx context.Context, execution ExecutionSpec, opts v1.CreateOptions) (ExecutionSpec, error)
	// Update an ExecutionSpec
	Update(ctx context.Context, execution ExecutionSpec, opts v1.UpdateOptions) (ExecutionSpec, error)
	// Delete an ExecutionSpec
	Delete(ctx context.Context, name string, opts v1.DeleteOptions) error
	// Delete a collection of ExecutionSpec
	DeleteCollection(ctx context.Context, opts v1.DeleteOptions, listOpts v1.ListOptions) error
	// Retrieve an ExecutionSpec
	Get(ctx context.Context, name string, opts v1.GetOptions) (ExecutionSpec, error)
	// Retrieve a list of ExecutionSpecs
	List(ctx context.Context, opts v1.ListOptions) (*ExecutionSpecList, error)
	// Path an ExecutionSpec
	Patch(ctx context.Context, name string, pt types.PatchType, data []byte, opts v1.PatchOptions, subresources ...string) (ExecutionSpec, error)
}

// Create an ExecutionClient for the specified ExecutionType
func NewExecutionClientOrFatal(execType ExecutionType, initConnectionTimeout time.Duration, clientParams ClientParameters) ExecutionClient {
	switch execType {
	case ArgoWorkflow:
		// var mod string
		// if pluginName == "multi-cluster" {
		// 	mod = "/bin/multicluster.so"
		// } else {
		// 	mod = "./plugins/default.so"
		// }
		// plug, err := plugin.Open(mod)
		// if err != nil {
		// 	return errors.Wrap(err, "Failed to load the plugin")
		// }
		// clientHook, err := plug.Lookup("WorkflowClientHook")
		// if err != nil {
		// 	return errors.Wrap(err, "Failed to load the plugin")
		// }
		// var hook WorkflowClientHook
		// hook, ok := clientHook.(WorkflowClientHook)
		// if !ok {
		// 	return errors.New("Failed to load the plugin")
		// }

		// return hook.CreateClient(initConnectionTimeout, clientParams)
		var mod = "/bin/multicluster.so"
		plug, err := plugin.Open(mod)
		if err != nil {
			glog.Fatalf("Failed to open plugin. Error: %v", err)
		}
		clientHook, err := plug.Lookup("WorkflowClientHook")
		if err != nil {
			glog.Fatalf("Failed to lookup plugin. Error: %v", err)
		}
		var hook WorkflowClientHook
		hook, ok := clientHook.(WorkflowClientHook)
		if !ok {
			glog.Fatalf("Failed to convert plugin. Error: %v", err)
		}

		var argoProjClient *argoclient.Clientset
		operation := func() error {
			restConfig, err := hook.CreateConfig(clientParams.QPS, clientParams.Burst)
			// restConfig, err := rest.InClusterConfig()
			// if err != nil {
			// 	return errors.Wrap(err, "Failed to initialize the RestConfig")
			// }
			// restConfig.QPS = float32(clientParams.QPS)
			// restConfig.Burst = clientParams.Burst
			// argoProjClient = argoclient.NewForConfigOrDie(restConfig)
			if err != nil {
				return errors.Wrap(err, "Failed to initialize the RestConfig")
			}
			argoProjClient = argoclient.NewForConfigOrDie(&restConfig)
			return nil
		}

		b := backoff.NewExponentialBackOff()
		b.MaxElapsedTime = initConnectionTimeout
		errretry := backoff.Retry(operation, b)
		if errretry != nil {
			glog.Fatalf("Failed to create ExecutionClient for Argo. Error: %v", errretry)
		}
		return &WorkflowClient{client: argoProjClient}
	case TektonPipelineRun:
		glog.Fatalf("Not implemented yet")
	default:
		glog.Fatalf("Not supported type of Execution")
	}
	return nil
}

// Create an ExecutionInformer for the specified Executiontype
func NewExecutionInformerOrFatal(execType ExecutionType, namespace string,
	initConnectionTimeout time.Duration, clientParams ClientParameters,
) ExecutionInformer {
	switch execType {
	case ArgoWorkflow:
		var argoInformer argoinformer.SharedInformerFactory
		operation := func() error {
			restConfig, err := rest.InClusterConfig()
			if err != nil {
				return errors.Wrap(err, "Failed to initialize the RestConfig")
			}
			restConfig.QPS = float32(clientParams.QPS)
			restConfig.Burst = clientParams.Burst
			argoProjClient := argoclient.NewForConfigOrDie(restConfig)
			if namespace == "" {
				argoInformer = argoinformer.NewSharedInformerFactory(argoProjClient, time.Second*30)
			} else {
				argoInformer = argoinformer.NewFilteredSharedInformerFactory(
					argoProjClient, time.Second*30, namespace, nil)
			}
			return nil
		}

		b := backoff.NewExponentialBackOff()
		b.MaxElapsedTime = initConnectionTimeout
		err := backoff.Retry(operation, b)
		if err != nil {
			glog.Fatalf("Failed to create ExecutionInformer for Argo. Error: %v", err)
		}
		return &WorkflowInformer{
			informer: argoInformer.Argoproj().V1alpha1().Workflows(), factory: argoInformer,
		}
	case TektonPipelineRun:
		glog.Fatalf("Not implemented yet")
	default:
		glog.Fatalf("Not supported type of Execution")
	}
	return nil
}
