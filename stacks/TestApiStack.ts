import { StackContext, Api, use } from "sst/constructs";
import { AuthStack } from "./AuthStack";

export function TestApiStack({ stack, app }: StackContext) {
  const { auth } = use(AuthStack);

  // Create Api
  const testapi = new Api(stack, "TestApi", {
    // authorizers: {
    //   jwt: {
    //     type: "user_pool",
    //     userPool: {
    //       id: auth.userPoolId,
    //       clientIds: [auth.userPoolClientId],
    //     },
    //   },
    // },
    // defaults: {
    //   authorizer: "jwt",
    // },
    defaults: {
      authorizer: "jwt",
      function: {
        environment: {
          STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY as string,
          //moved this up from outside of -/functin
        },
      },
    },
    authorizers: {
      jwt: {
        type: "user_pool",
        userPool: {
          id: auth.userPoolId,
          clientIds: [auth.userPoolClientId],
        },
      },
    },



    routes: {
      "GET /private": "packages/functions/src/private.main",
      "GET /public": {
        function: "packages/functions/src/public.main",
        authorizer: "none",
      },
    },
  });

  auth.attachPermissionsForAuthUsers(stack, [testapi]);

  stack.addOutputs({
    ApiEndpoint: testapi.url,
    UserPoolId: auth.userPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });

  // Return the API resource
  return {
    testapi,
  };
}
