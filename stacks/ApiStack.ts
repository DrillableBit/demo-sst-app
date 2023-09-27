import { StackContext, Api, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";
import { AuthStack } from "./AuthStack";

export function ApiStack({ stack, app }: StackContext) {
  const { table } = use(StorageStack);
  const { auth } = use(AuthStack);
  const { bucket } = use(StorageStack);

  // Create the API
  const api = new Api(stack, "Api", {
    // defaults: {
    //   authorizer: "iam",
    //   function: {
    //     bind: [table],
    //     environment: {
    //       STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY as string,
    //       //moved this up from outside of -/functin
    //     },
    //   },

    // },
    defaults: {
      authorizer: "jwt",
      function: {
        bind: [table, bucket],
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

    cors: true,
    routes: {
      "POST /create-user": {
        function : "packages/functions/src/user/createUser.main",
      },
      // "GET /notes": "packages/functions/src/list.main",
      // "POST /notes": "packages/functions/src/create.main",
      "GET /notes":     {
        function: "packages/functions/src/list.main",
        // authorizer: "none",
      },
      "GET /presigned":     {
        function: "packages/functions/src/get_presigned_url.main",
        // authorizer: "none",
      },
      "POST /notes":     {
        function: "packages/functions/src/create.main",
        // authorizer: "none",
      },
      "GET /notes/{id}": "packages/functions/src/get.main",
      "PUT /notes/{id}": "packages/functions/src/update.main",
      "DELETE /notes/{id}": "packages/functions/src/delete.main",
      "POST /billing": "packages/functions/src/billing.main",


      "GET /private": "packages/functions/src/private.main",
      "GET /public": {
        function: "packages/functions/src/public.main",
        authorizer: "none",
      },
    },
  });

  // Show the API endpoint in the output
  console.log("api");
  console.log(api.url);
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}


//handle cors from handler.js in core
