import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";
import { WebStack } from "./stacks/WebStack";
import { AttachStoragePermissions } from "./stacks/AttatchStoragePermissions";
import { TestApiStack } from "./stacks/TestApiStack";
import { TestAuthStack } from "./stacks/TestAuthStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app
    .stack(AuthStack)
    // .stack(TestAuthStack)
    .stack(StorageStack)
    .stack(ApiStack)
    .stack(TestApiStack)
    .stack(AttachStoragePermissions)

    .stack(WebStack)
    
  }
} satisfies SSTConfig;
