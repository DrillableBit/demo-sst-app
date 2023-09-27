import * as iam from "aws-cdk-lib/aws-iam";
import { StackContext, Cognito, use } from "sst/constructs";
// import { StorageStack } from "./StorageStack";
// import { ApiStack } from "./ApiStack";

export function AuthStack({ stack, app }: StackContext) {
  // Create a Cognito User Pool and Identity Pool
  //Remember to manually set the cognito callback URL to http://:::URL:::/api/auth/callback/cognito : adn remove implicit grant
  const auth = new Cognito(stack, "Auth", {
    login: ["email"],

    cdk: {
      userPoolClient: {
        authFlows: {
          userPassword: true,
          userSrp: true,
        },
      },
    },
  });

  // Show the auth resources in the output
  stack.addOutputs({
    Region: app.region,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
  
  });

  // Return the auth resource
  return {
    auth,
  };
}
