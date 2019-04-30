import lambda = require("@aws-cdk/aws-lambda");
import apigw = require("@aws-cdk/aws-apigateway");
import cdk = require("@aws-cdk/cdk");
import { LambdasIrelandStackProp } from "../LambdasIrelandStackProps";

export interface HelloWorldIrelandLambdaStackProps extends LambdasIrelandStackProp {}

export default class HelloWorldIrelandLambdaStack extends cdk.Stack {
  constructor(app: cdk.App, id: string, props: HelloWorldIrelandLambdaStackProps) {
    const stackId = `${props.paramEnvId}-${id}`;
    super(app, stackId, props);

    const lambdaFn = new lambda.Function(this, `${props.paramEnvId}-hello-ireland-lambda`, {
      code: lambda.Code.directory("dist/lambdas-ireland/hello-world-ireland/src"),
      handler: "helloWorldIreland-handler.default",
      timeout: 300,
      runtime: lambda.Runtime.NodeJS810
    });

    const api = new apigw.RestApi(this, `${props.paramEnvId}-endpoint`);

    const hello = api.root.addResource("hello");
    hello.addMethod("GET", new apigw.LambdaIntegration(lambdaFn));
  }
}
