import { Table } from "sst/node/table";
import handler from "@notes/core/src/handler";
import dynamoDb from "@notes/core/src/dynamodb";
import { parseKey } from "@notes/core/src/dynamoParse";
import { CheckGetBase64 } from "@notes/core/src/CheckGetBase64";
import { Handler } from "aws-lambda";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import setup from "@notes/core/src/setup.json";
import { unixToDate } from "@notes/core/src/unixToDate";

//fire this off when a user is created inside cognito in frontend

export const main = handler(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      if (!event.requestContext?.authorizer) {
        return {
          statusCode: 500,
          body: JSON.stringify({ message: "no user id" }),
        };
      }
      console.log(
        "userid-login",
        event.requestContext?.authorizer.jwt.claims.sub
      );
      const userId = event.requestContext?.authorizer.jwt.claims.sub;
      const body = JSON.parse(CheckGetBase64(event));

      const checkUser_params = {
        TableName: Table.dynamo.tableName,
        // 'Key' defines the partition key and sort key of the item to be retrieved
        Key: {
          // userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, // The id of the author
          partitionKey: parseKey("user", userId), // The id of the author
          sortKey: parseKey("user", userId), // The id of the note from the path
        },
      };

      const checkUser_response = await dynamoDb.get(checkUser_params);

      if (Object.keys(checkUser_response).length === 0) {
        try {
          const createUser_params = {
            TableName: Table.dynamo.tableName,
            Item: {
              partitionKey: parseKey("user", userId), // The id of the author
              sortKey: parseKey("user", userId), // A unique uuid
              createdAt: unixToDate(Date.now()), // Current Unix timestamp
              balance: setup.newUserDefaultBalance,
              currency: setup.defaultCurrency,
              userId: userId,
              email: body.email,
            },
          };

          const createUser_response = await dynamoDb.put(createUser_params);
          console.log("createUser_response", createUser_response)
          return {
            statusCode: 200,
            body: JSON.stringify({ newUser: true }),
          };
        } catch (error) {
          console.log("Error creating user", error);
          return {
            statusCode: 400,
            body: JSON.stringify({}),
          };
        }
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify({ newUser: false }),
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    }
  }
);
