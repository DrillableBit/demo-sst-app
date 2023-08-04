import {  StackContext, NextjsSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";
import { StorageStack } from "./StorageStack";
import { AuthStack } from "./AuthStack";

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
  const api = use(ApiStack);
  const auth = use(AuthStack);
  const bucket = use(StorageStack);
  const table = use(StorageStack);

  const site = new NextjsSite(stack, "site", {

    path: "packages/web", 
    
    environment: {
      NEXT_PUBLIC_API_URL: api.api.url,
      NEXT_PUBLIC_REGION: stack.region,
      NEXT_PUBLIC_BUCKET: bucket.bucket.bucketName,
      NEXT_PUBLIC_TABLE: table.table.tableName,
      NEXT_PUBLIC_USER_POOL_ID: auth.auth.userPoolId,
      NEXT_PUBLIC_USER_POOL_CLIENT_ID: auth.auth.userPoolClientId as string,
      NEXT_PUBLIC_IDENTITY_POOL_ID: auth.auth.cognitoIdentityPoolId as string,
      NEXT_PUBLIC_CLIENT_SECRET: auth.auth.cdk.userPoolClient.userPoolClientSecret.toString(),
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
      NEXT_PUBLIC_NEXTAUTH_SECRET: "secret"
    },
  });
  // console.log(bucket.bucketName)
  console.log("web")
  console.log(api.api.url)
  stack.addOutputs({
    NEXT_PUBLIC_SITE_URL: site.url || 'localhost:3000',
  });
}
