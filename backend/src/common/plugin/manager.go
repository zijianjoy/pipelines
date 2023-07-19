// // Package plugin serves as the bridge between the main application and plugins.
// //
// // Eli Bendersky [https://eli.thegreenplace.net]
// // This code is in the public domain.
package plugin

// import (
// 	"fmt"
// 	"time"

// 	"github.com/kubeflow/pipelines/backend/src/common/util"
// 	// "example.com/content"
// )

// // RoleHook takes the role contents, DB and Post and returns the text this role
// // should be replaced with.
// type WorkflowClientHook func(initConnectionTimeout time.Duration, clientParams util.ClientParameters) util.ExecutionClient

type PluginManager struct {
	// workflowClientHook map[string]WorkflowClientHook
}

// func newPluginManager() *PluginManager {
// 	pm := &PluginManager{}
// 	pm.workflowClientHook = make(map[string]WorkflowClientHook)
// 	return pm
// }

// func (pm *PluginManager) RegisterWorkflowClientHook(rolename string, hook WorkflowClientHook) {
// 	pm.workflowClientHook[rolename] = hook
// }

// // func (pm *PluginManager) RegisterContentsHook(hook ContentsHook) {
// // 	pm.contentsHooks = append(pm.contentsHooks, hook)
// // }

// func (pm *PluginManager) ApplyRoleHooks(rolename string, initConnectionTimeout time.Duration, clientParams util.ClientParameters) (util.ExecutionClient, error) {
// 	if hook, ok := pm.workflowClientHook[rolename]; ok {
// 		return hook(initConnectionTimeout, clientParams), nil
// 	} else {
// 		return nil, fmt.Errorf("no hook for role '%s' found", rolename)
// 	}
// }

// // func (pm *PluginManager) ApplyContentsHooks(contents string, db *content.DB, post *content.Post) string {
// // 	for _, hook := range pm.contentsHooks {
// // 		contents = hook(contents, db, post)
// // 	}
// // 	return contents
// // }
