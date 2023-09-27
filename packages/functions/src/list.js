import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";
import { parseKey } from "@notes/core/dynamoParse";

export const main = handler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub

  const params = {
    TableName: Table.dynamo.tableName,
    KeyConditionExpression: "#partitionKey = :partitionKey and begins_with(#sortKey, :prefix)", 
    ExpressionAttributeNames: {
      "#partitionKey": "partitionKey", 
      "#sortKey": "sortKey"     
  },

    ExpressionAttributeValues: {
        ":partitionKey": parseKey("user", userId),
        ":prefix": parseKey("note", "")
       
    },
  };
  console.log(params)

  const result = await dynamoDb.query(params);

  return result.Items;
}); 