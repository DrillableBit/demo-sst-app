import { Table } from "sst/node/table";
import * as uuid from "uuid";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";
import { CheckGetBase64 } from "@notes/core/src/CheckGetBase64";
import { parseKey } from "@notes/core/dynamoParse";
import { unixToDate } from "@notes/core/src/unixToDate";

export const main = handler(async (event) => {
  const body = JSON.parse(CheckGetBase64(event));
  const noteId = uuid.v1()
  const user = event.requestContext.authorizer.jwt.claims.sub;
  const createdAt = unixToDate(Date.now());

  const params = {
    TableName: Table.dynamo.tableName,
    Item: {
      partitionKey: parseKey(
        "user",
        user
      ),
      sortKey: parseKey(
        "note", 
        noteId
        ),
      createdBy: user,
      noteId: noteId,
      content: body.content, // Parsed from request body
      attachment: body.attachment, // Parsed from request body
      createdAt: createdAt, // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return "params.Item";
});
