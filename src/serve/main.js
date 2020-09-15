// sample_client_ts.ts
// need install the `node-opcua` package.

// import { OPCUAClient, MessageSecurityMode, SecurityPolicy, AttributeIds, ClientSubscription, TimestampsToReturn, makeBrowsePath, MonitoringParametersOptions, ReadValueIdLike, ClientMonitoredItem, DataValue, DataType, StatusCode, StatusCodes } from "node-opcua";

// const connectionStrategy = {
//   initialDelay: 1000,
//   maxRetry: 1
// };

// const options = {
//   applicationName: "MyClient",
//   connectionStrategy: connectionStrategy,
//   securityMode: MessageSecurityMode.None,
//   securityPolicy: SecurityPolicy.None,
//   endpoint_must_exist: false
// };

// const client = OPCUAClient.create(options);

// const endpointUrl = "opc.tcp://192.168.1.70:4840";

// function write(endpointUrl, session, nodeId, value) {
//   let nodeToWrite = {
//     nodeId: nodeId,
//     attributeId: AttributeIds.Value,
//     // indexRange: null,
//     value: new DataValue({
//       statusCode: StatusCodes.Good,
//       value: {
//         dataType: DataType.Float,
//         value: value
//       }
//     })
//   };
//   let risultato = session.write(nodeToWrite);

//   var dataValue = session.read(nodeToWrite);
//   console.log(" value ", dataValue.toString());

//   return dataValue;
// }

// async function main() {
//   try {
//     // step 1
//     await client.connect(endpointUrl);
//     console.log("connected !");

//     // step 2
//     const session = await client.createSession();
//     console.log("session created !");

//     // step 3
//     const browseResult = await session.browse("RootFolder");

//     console.log("references of RootFolder :");
//     for (const reference of browseResult.references) {
//       console.log("   -> ", reference.browseName.toString());
//     }

//     // let nodeId = "ns=3;s=\"2015_CU100_Phase_HMI\".\"PH01_Impeller\".\"Target_Speed\"";
//     let nodeId = 'ns=3;s="Testdb"."WriteTest"';
//     let value = 400;
//     let dataValue = write(endpointUrl, session, nodeId, value);

//     // step 5
//     const subscription = ClientSubscription.create(session, {
//       requestedPublishingInterval: 1000,
//       requestedLifetimeCount: 100,
//       requestedMaxKeepAliveCount: 10,
//       maxNotificationsPerPublish: 100,
//       publishingEnabled: true,
//       priority: 10
//     });

//     subscription
//       .on("started", function() {
//         console.log("subscription started for 2 seconds - subscriptionId=", subscription.subscriptionId);
//       })
//       .on("keepalive", function() {
//         console.log("keepalive", dataValue.value.toString());
//       })
//       .on("terminated", function() {
//         console.log("terminated");
//       });

//     //     // install monitored item

//     const itemToMonitor = {
//       nodeId: 'ns=3;s="Testdb"."WriteTest"',
//       attributeId: AttributeIds.Value
//     };
//     const parameters = {
//       samplingInterval: 100,
//       discardOldest: true,
//       queueSize: 100
//     };

//     const monitoredItem = ClientMonitoredItem.create(subscription, itemToMonitor, parameters, TimestampsToReturn.Both);

//     monitoredItem.on("changed", dataValue => {
//       console.log(" value has changed : ", dataValue.value.toString());
//     });

//     async function timeout(ms) {
//       return new Promise(resolve => setTimeout(resolve, ms));
//     }
//     await timeout(100000);

//     console.log("now terminating subscription");
//     await subscription.terminate();

//     // step 6

//     const browsePath = makeBrowsePath("RootFolder", "/Objects/Server.ServerStatus.BuildInfo.ProductName");

//     const result = await session.translateBrowsePath(browsePath);
//     const productNameNodeId = result.targets[0].targetId;
//     console.log(" Product Name nodeId = ", productNameNodeId.toString());

//     await session.close();

//     // step 7
//     await client.disconnect();
//     console.log("done !");
//   } catch (err) {
//     console.log("An error has occured : ", err);
//   }
// }

async function main() {
  console.log("main opc process");
}

module.exports = {
  opcTest: main
};
