// command:
// npx ts-node --project scripts/tsconfig.json scripts/post-mlmd-for-mock.ts

import fetch from 'node-fetch';
// const {EchoRequest, EchoResponse} = require('./echo_pb.js');
// const {EchoServiceClient} = require('./echo_grpc_web_pb.js');

// var echoService = new EchoServiceClient('http://localhost:8080');

const {
  GetContextsRequest,
} = require('../src/third_party/mlmd/generated/ml_metadata/proto/metadata_store_pb.js');
const {
  MetadataStoreServiceClient,
} = require('../src/third_party/mlmd/generated/ml_metadata/proto/metadata_store_service_pb.js');

async function main() {
  const response = await fetch('https://api.github.com/users/github');
  const data = await response.json();

  console.log(data);

  var metadataStoreServiceClient = new MetadataStoreServiceClient('http://localhost:9090');
  //   const metadataServicePromiseClient = new MetadataStoreServicePromiseClient('', null, null);
  //   const request = new GetContextsRequest();
  //   const responseMLMD =  metadataServicePromiseClient.getContexts(request);

  //   if (responseMLMD) {
  //     console.log(responseMLMD.getContextsList().length);
  //   }
}

main();
