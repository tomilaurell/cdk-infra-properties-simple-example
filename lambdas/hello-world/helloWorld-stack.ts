//import events = require("@aws-cdk/aws-events");
//import targets = require("@aws-cdk/aws-events-targets");
import lambda = require("@aws-cdk/aws-lambda");
import cdk = require("@aws-cdk/cdk");
import { RootStackProps } from "../../RootStackProps";

export interface HelloWorldStackProps extends RootStackProps {
  message: string;
}

export default class HelloWorldLambdaStack extends cdk.Stack {
  constructor(app: cdk.App, id: string, props: HelloWorldStackProps) {
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
