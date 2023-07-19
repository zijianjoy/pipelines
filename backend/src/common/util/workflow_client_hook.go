package util

import (
	"k8s.io/client-go/rest"
	// "example.com/content"
)

type WorkflowClientHook interface {
	CreateConfig(qps float64, burst int) (rest.Config, error)
}
