// Copyright 2018 The Kubeflow Authors
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

import express from 'express';
import { GetContextsResponse } from 'src/third_party/mlmd';
import mockApiMiddleware from './mock-api-middleware';
import proxy from 'http-proxy-middleware';

var grpc = require('grpc');
const PROTO_PATH = 'mock-backend/ml_metadata/proto/metadata_store_service.proto';
var protoLoader = require('@grpc/proto-loader');

const app = express();
const port = process.argv[2] || 3001;

// Uncomment the following line to get 1000ms delay to all requests
// app.use((req, res, next) => { setTimeout(next, 1000); });

app.use((_: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

export const HACK_FIX_HPM_PARTIAL_RESPONSE_HEADERS = {
  Connection: 'keep-alive',
};

/** Proxy metadata requests to the Envoy instance which will handle routing to the metadata gRPC server */
// kubectl port-forward svc/metadata-envoy-service 9090:9090
app.all(
  '/ml_metadata.*',
  proxy({
    changeOrigin: true,
    onProxyReq: proxyReq => {
      console.log('Metadata proxied request: ', (proxyReq as any).path);
    },
    headers: HACK_FIX_HPM_PARTIAL_RESPONSE_HEADERS,
    target: getAddress({ host: 'localhost', port: '9090' }),
  }),
);

mockApiMiddleware(app as any);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log('Server listening at http://localhost:' + port);
});

const options = {
  keepCase: true,
  // longs: String,
  // enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: ['mock-backend/', './'],
};
var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const MetadataProto = grpc.loadPackageDefinition(packageDefinition);

// var Server = new grpc.Server();
// Server.addService(MetadataProto.ml_metadata.MetadataStoreService.service, {
//   GetContexts: (_: any, callback: any) => {
//     callback(null, new GetContextsResponse());
//   },
// });
// Server.bind('localhost:30043', grpc.ServerCredentials.createInsecure());
// Server.start();
export function getAddress({
  host,
  port,
  namespace,
  schema = 'http',
}: {
  host: string;
  port?: string | number;
  namespace?: string;
  schema?: string;
}) {
  namespace = namespace ? `.${namespace}` : '';
  port = port ? `:${port}` : '';
  return `${schema}://${host}${namespace}${port}`;
}
