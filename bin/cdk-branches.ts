#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { CdkBranchesStack } from '../lib/cdk-branches-stack';

const app = new cdk.App();
new CdkBranchesStack(app, 'CdkBranchesStack');
