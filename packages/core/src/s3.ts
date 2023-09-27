import crypto from "crypto";
import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

export async function getS3Url(route: string) {
  const separator = "/";
  const itemId = crypto.randomUUID();
  const Key = route + separator + itemId;

  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: Key,
    Bucket: Bucket.Uploads.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { url: url, id: itemId, key: Key };
}


export async function getS3Object(key: string): Promise<{ url: any }> {
  console.log("key", key)
  const command = new GetObjectCommand({
    Bucket: Bucket.Uploads.bucketName,
    Key: key,
  });
  const s3Client = new S3Client({});

  // const response = await s3Client.send(command);

  const url = await getSignedUrl(s3Client, command);
  console.log("data", url)
  if (!url) {
    throw new Error('No data in S3 response');
  }

  return { url }
}

export async function deleteS3Object(key: string): Promise<{ status: any }> {
  const s3Client = new S3Client({});
  const command = new DeleteObjectCommand({
    Bucket: Bucket.Uploads.bucketName,
    Key: key,
  });

  try {
    await s3Client.send(command);

    console.log(`Successfully deleted ${key} from ${Bucket.Uploads.bucketName}`);
    return { status: "Deleted succesfully" };
  } catch (error) {
    console.error(`Error deleting ${key} from ${Bucket.Uploads.bucketName}: `, error);
    throw new Error(`Unable to delete object ${key}`);
  }
}