
import { StackContext, NextjsSite, use } from "sst/constructs";


export function WebStack({ stack }: StackContext) {
  // const api = use(ApiStack);

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    environment: {
      NEXT_PUBLIC_GRAPHQL_URL: "api.url" + "/graphql",
      NEXT_PUBLIC_GRAPHQL_URL2: "graphql",
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
