import lambda = require("@aws-cdk/aws-lambda");
import apigw = require("@aws-cdk/aws-apigateway");
import cdk = require("@aws-cdk/cdk");
import { RootStackProps } from "../../RootStackProps";

export interface HelloWorldStackProps extends RootStackProps {
  message: string;
}

export default class HelloWorldLambdaStack extends cdk.Stack {
  constructor(app: cdk.App, id: string, props: HelloWorldStackProps) {
    const stackId = `${props.paramEnvId}-${id}`;
    super(app, stackId, props);

    const lambdaFn = new lambda.Function(this, `${props.paramEnvId}-hello-lambda`, {
      code: lambda.Code.directory("dist/lambdas/hello-world/src"),
      handler: "helloWorld-handler.default",
      timeout: 300,
      runtime: lambda.Runtime.NodeJS810,
      environment: {
        message: props.message
      }
    });

    const api = new apigw.RestApi(this, `${props.paramEnvId}-endpoint`);

    const hello = api.root.addResource("hello");
    hello.addMethod("GET", new apigw.LambdaIntegration(lambdaFn));
  }
}
