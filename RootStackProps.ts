import { BaseStackProps } from "cdk-infra-properties";

export interface RootStackProps extends BaseStackProps {
  author: string;
  team: string;
}
