package main

import (
	"github.com/golang/glog"
	"github.com/pkg/errors"
	"k8s.io/client-go/rest"
)

type workflowClientHook struct {
}

func (workflowClientHook) CreateConfig(qps float64, burst int) (rest.Config, error) {
	glog.Info("Enter gdch extension")

	restConfig, err := rest.InClusterConfig()
	if err != nil {
		return rest.Config{}, errors.Wrap(err, "Failed to initialize the RestConfig")
	}
	restConfig.QPS = float32(qps)
	restConfig.Burst = burst
	return *restConfig, nil
}

var WorkflowClientHook workflowClientHook
