import * as iam from "aws-cdk-lib/aws-iam";
import { StackContext, Cognito, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";
import { ApiStack } from "./ApiStack";
import { AuthStack } from "./AuthStack";
import { TestApiStack } from "./TestApiStack";  

export function AttachStoragePermissions({ stack, app }: StackContext) {
  const { bucket } = use(StorageStack);
  const { api } = use(ApiStack);
  const { testapi } = use(TestApiStack);
  const { auth } = use(AuthStack);

  // Create a Cognito User Pool and Identity Pool

  auth.attachPermissionsForAuthUsers(stack, [
    // Allow access to the API
    api,
    testapi,
    "s3",
    // Policy granting access to a specific folder in the bucket
    // new iam.PolicyStatement({
    //   actions: ["s3:*"],
    //   effect: iam.Effect.ALLOW,
    //   resources: [
    //     bucket.bucketArn + "/private/${cognito-identity.amazonaws.com:sub}/*",
    //   ],
    // }),
  ]);

  // Show the auth resources in the output

  console.log("perms");
  stack.addOutputs({
    Permissions: "Attached",
  });

  // Return the auth resource
  return {
    auth,
  };
}
