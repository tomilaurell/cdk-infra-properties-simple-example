import cdk = require("@aws-cdk/cdk");
import ec2 = require("@aws-cdk/aws-ec2");

export default class NetworkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /*const vpc = */ new ec2.VpcNetwork(this, id);

    // The code that defines your stack goes here
  }
}
