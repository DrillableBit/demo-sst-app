import { StackContext, Table, Bucket } from "sst/constructs";

export function StorageStack({ stack, app }: StackContext) {
  // Create an S3 bucket
  const bucket = new Bucket(stack, "Uploads", {
    cors: [
      {
        maxAge: "1 day",
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      },
    ],
  });
  // Create the DynamoDB table
  // const table = new Table(stack, "Notes", {
  //   fields: {
  //     userId: "string",
  //     noteId: "string",
  //   },
  //   primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  // });
  const table = new Table(stack, "dynamo", {
    fields: {
      partitionKey: "string",  //owned by
      sortKey: "string",      //entity name
    },
    primaryIndex: { partitionKey: "partitionKey", sortKey: "sortKey" },
  });
  console.log("storage")

  stack.addOutputs({
    BucketName: bucket.bucketName,
  
    TableName: table.tableName,
   
  });

  return {
    table,
    bucket,
  };
}



// DynamoDB table single table design:
// U = user
// N = note
// use like: 
// U#1234 U#1234 === user 1234 table, add user fields
// N#1212 N#1212 === note 1212 table, add note fields
// U#1234 N#1212 === connection between note and user, add connection fields


