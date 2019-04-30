import cdk = require("@aws-cdk/cdk");
import { withInfraProperties } from "cdk-infra-properties";

import NetworkStack from "./common-stacks/network";
import HelloWorldLambdaStack from "./lambdas/hello-world/helloWorld-stack";
import HelloWorldIrelandLambdaStack from "./lambdas-ireland/hello-world-ireland/helloWorldIreland-stack";

async function createStacks() {
  const app = new cdk.App();

  await withInfraProperties({
    app,
    stack: NetworkStack, // Refer to the stack class
    stackName: "cdk-network", // Give your stack original stack name
    path: "./common-stacks" // Give path to stack. This will be used to overwrite properties.
    /* You can also provice stack props here
    stackProps: {
      autoDeploy: false
    }*/
  });

  await withInfraProperties({
    app,
    stack: HelloWorldLambdaStack,
    stackName: "cdk-hello-world",
    path: "./lambdas/hello-world"
  });

  await withInfraProperties({
    app,
    stack: HelloWorldIrelandLambdaStack,
    stackName: "cdk-hello-world-ireland",
    path: "./lambdas-ireland/hello-world-ireland"
  });

  return app;
}

createStacks().then(app => {
  app.run();
});
