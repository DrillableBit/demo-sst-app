import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";
import { handleServerError } from "../../core/src/error";
import { getS3Object } from "../../core/src/s3";
import { parseKey } from "@notes/core/dynamoParse";

export const main = handler(async (event) => {
  console.log("auth," , event.requestContext.authorizer.jwt.claims.sub)
  if (!event.pathParameters.id) {
    handleServerError("Missing parameters", "Missing parameters");
  }
  if (!event.requestContext.authorizer.jwt.claims.sub) {
    handleServerError("Not authorized", "Not authorized");
  }



  const userId = event.requestContext.authorizer.jwt.claims.sub;
  const noteId = event.pathParameters.id;
  console.log("userId", userId, "noteId", noteId)

  const params = {
    TableName: Table.dynamo.tableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    Key: {
      // userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, // The id of the author
      partitionKey: parseKey("user", userId), // The id of the author
      sortKey:  parseKey("note", noteId), // The id of the note from the path
    },
  };

  const result = await dynamoDb.get(params);
  console.log("rese", result)
  if (!result.Item) {
    handleServerError("Item not found", "Item not found");
  }

  result.Item.image = await getS3Object(userId + "/" + result.Item.attachment);

  // Return the retrieved item
  return result.Item  
});
