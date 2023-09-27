import {Cognito, StackContext} from "sst/constructs";

export function TestAuthStack({ stack, app }: StackContext) {
    const testauth = new Cognito(stack, "TestCognitoAuth", {
        login: ["email"],
    });

    return {
        testauth,
    };
}