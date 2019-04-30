//import events = require("@aws-cdk/aws-events");
//import targets = require("@aws-cdk/aws-events-targets");
import lambda = require("@aws-cdk/aws-lambda");
import cdk = require("@aws-cdk/cdk");
import { LambdasIrelandStackProp } from "../LambdasIrelandStackProps";

export interface HelloWorldIrelandLambdaStackProps extends LambdasIrelandStackProp {}

export default class HelloWorldIrelandLambdaStack extends cdk.Stack {
  constructor(app: cdk.App, id: string, props: HelloWorldIrelandLambdaStackProps) {
    const stackId = `${props.paramEnvId}-${id}`;
    super(app, stackId, props);

    /*const lambdaFn = */ new lambda.Function(this, "id", {
      code: lambda.Code.directory("dist/lambdas/hello-world/src"),
      handler: "helloWorld-handler.default",
      timeout: 300,
      runtime: lambda.Runtime.NodeJS810
    });
  }
}
