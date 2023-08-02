import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";
import { WebStack } from "./stacks/WebStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app
    .stack(WebStack)
    .stack(StorageStack)
    .stack(ApiStack)
    .stack(AuthStack)
   
    
  }
} satisfies SSTConfig;
