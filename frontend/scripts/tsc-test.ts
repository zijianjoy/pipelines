// npx ts-node --project scripts/tsconfig.json scripts/tsc-test.ts --target localhost:8080
// kubectl port-forward svc/metadata-grpc-service 8080:8080

var parseArgs = require('minimist');
var grpc = require('@grpc/grpc-js');

var protoLoader = require('@grpc/proto-loader');

var PROTO_PATH =
  __dirname + '/../../third_party/ml-metadata/ml_metadata/proto/metadata_store_service.proto';

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [__dirname + '/../../third_party/ml-metadata'],
});
var mlMetadataProto = grpc.loadPackageDefinition(packageDefinition).ml_metadata;

const {
  Context,
} = require('../src/third_party/mlmd/generated/ml_metadata/proto/metadata_store_pb');
const {
  PutContextsRequest,
  //   MetadataStoreServiceClient,
  MetadataStoreServicePromiseClient,
} = require('../src/third_party/mlmd/generated/ml_metadata/proto/metadata_store_service_pb');

import { MetadataStoreServiceClient } from '../src/third_party/mlmd/generated/ml_metadata/proto/metadata_store_service_grpc_web_pb';

function saveMetadata(client: any) {
  //   client.GetContexts({}, function(err: any, response: any) {
  //     console.log('err:', err);
  //     if (response) {
  //       const contexts = response.contexts;
  //       for (let c of contexts) {
  //         console.log('hello:', c.id);
  //         console.log('name:', c.name);
  //       }
  //     }
  //   });

  //   client.GetContextTypes({}, function(err: any, response: any) {
  //     console.log('err:', err);
  //     if (response) {
  //       const context_types = response.context_types;
  //       for (let c of context_types) {
  //         console.log('context type id:', c.id);
  //         console.log('context type name:', c.name);
  //       }
  //     }
  //   });

  const cContext = new Context();
  //   cContext.setName('custom context');
  //   cContext.setTypeId(3);
  //   const putContextsRequest = new PutContextsRequest();
  //   putContextsRequest.addContexts(cContext);
  //   console.log('putContextsRequest length ' + putContextsRequest.getContexts().length);
  client.PutContexts({ contexts: [{ name: 'cus context', type_id: 3 }] }, function(
    err: any,
    response: any,
  ) {
    console.log('PutContexts err ' + err);
    if (err) {
      process.exit(1);
      // PutContexts err Error: 6 ALREADY_EXISTS: Given node already exists: type_id: 3
      // name: "cus context"
      // Internal: mysql_query failed: errno: 1062, error: Duplicate entry '3-cus context' for key 'type_id'
      //         Cannot create node for type_id: 3 name: "cus context"
    }
    console.log('PutContexts response' + JSON.stringify(response));
    for (let c of response.context_ids) {
      console.log('context id:', c);
    }
  });

  client.GetContexts({}, function(err: any, response: any) {
    console.log('err:', err);
    if (response) {
      const contexts = response.contexts;
      for (let c of contexts) {
        console.log('hello:', c.id);
        console.log('type id:', c.type_id);
        console.log('name:', c.name);
        // console.log(JSON.stringify(c));
        // for (let [key, value] of c.propertiesMap.entries()) {
        //   console.log(key + ' ' + value);
        // }
      }
    }
  });
}

function main() {
  var argv = parseArgs(process.argv.slice(2), {
    string: 'target',
  });
  var target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = 'localhost:8080';
  }
  console.log('Connecting to ' + target);
  var client = new mlMetadataProto.MetadataStoreService(target, grpc.credentials.createInsecure());

  saveMetadata(client);
}

main();

//   var user;
//   if (argv._.length > 0) {
//     user = argv._[0];
//   } else {
//     user = 'world';
//   }
