import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";
import { deleteS3Object } from "../../core/src/s3";
import { parseKey } from "@notes/core/dynamoParse";

export const main = handler(async (event) => {
  console.log("recieved delete")

  if (!event.pathParameters.id) {
    handleServerError("Missing parameters", "Missing parameters");
  }
  if (!event.requestContext.authorizer.jwt.claims.sub) {
    handleServerError("Not authorized", "Not authorized");
  }

  const userId = event.requestContext.authorizer.jwt.claims.sub;
  const noteId = event.pathParameters.id;

  const params = {
    TableName: Table.dynamo.tableName,
    Key: {
      partitionKey: parseKey("user", userId), // The id of the author
      sortKey: parseKey("note", noteId), // The id of the note from the path
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    handleServerError("Item not found", "Item not found");
  }
  try {
    await dynamoDb.delete(params);
    await deleteS3Object(userId + "/" + result.Item.attachment);
  
    return { status: "Delete succesfull" };  
  } catch (error) {
    console.log(error);
    return { status: "Delete failed" };
  }
  
});
