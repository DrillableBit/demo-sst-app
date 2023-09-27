import {  Config, StackContext, NextjsSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";
import { StorageStack } from "./StorageStack";
import { AuthStack } from "./AuthStack";
import { TestApiStack } from "./TestApiStack";
import { TestAuthStack } from "./TestAuthStack";
import { TokenizedStringFragments } from "aws-cdk-lib/core";

interface ApiStack {
  url: string;
}

interface AuthStack {
  userPoolId: string;
  userPoolClientId: string;
  cognitoIdentityPoolId: string;
}

interface StorageStack {
  bucketName: string;
  tableName: string;
}

export function WebStack({ stack }: StackContext) {
  const { api } = use(ApiStack);
  const {auth} = use(AuthStack);
  const {bucket} = use(StorageStack);
  const {table} = use(StorageStack);
  const {testapi} = use(TestApiStack);

  const STRIPE_PUBLIC_KEY = new Config.Secret(stack, "STRIPE_PUBLIC_KEY");

  const site = new NextjsSite(stack, "site", {
    bind: [STRIPE_PUBLIC_KEY, bucket],
    path: "packages/web", 
    
    environment: {
      NEXT_PUBLIC_API_URL: api.url,
      NEXT_PUBLIC_REGION: stack.region,
      NEXT_PUBLIC_BUCKET: bucket.bucketName,
      NEXT_PUBLIC_TABLE: table.tableName,
      NEXT_PUBLIC_USER_POOL_ID: auth.userPoolId,
      NEXT_PUBLIC_USER_POOL_CLIENT_ID: auth.userPoolClientId as string,
      NEXT_PUBLIC_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId as string,
      NEXT_PUBLIC_TEST: testapi.url,
      NEXT_PUBLIC_STRIPE_KEY: process.env.STRIPE_PUBLIC_KEY as string,
      NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
      // NEXT_PUBLIC_TEST_USER_POOL_ID: testauth.userPoolId,
      // NEXT_PUBLIC_TEST_USER_POOL_CLIENT_ID: testauth.userPoolClientId,
      // NEXT_PUBLIC_TEST_IDENTITY_POOL_ID: testauth.identityPoolId,
 


      // NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
      NEXT_PUBLIC_NEXTAUTH_SECRET: "50JPr1fhktUdTYZGgAzPNSHULpNY57StRbQMduW+HUE="
    },
  });
  // console.log(bucket.bucketName)
  console.log("web")
  console.log(api.url)
  stack.addOutputs({
    NEXT_PUBLIC_SITE_URL: site.url || 'localhost:3000',
  });
}
