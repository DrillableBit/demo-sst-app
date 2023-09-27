import { APIGatewayProxyHandlerV2WithJWTAuthorizer } from "aws-lambda";
import {getS3Url} from "@notes/core/s3";



export const main: APIGatewayProxyHandlerV2WithJWTAuthorizer = async (
  event
) => {
  try {
  const user = event.requestContext.authorizer.jwt.claims.sub;
  const parameters = user
 
  const PresignedS3 = await getS3Url(parameters as string);
  console.log("params", PresignedS3.url)
  return {
    statusCode: 200,
    
    body: JSON.stringify({
      url: PresignedS3.url,
      key: PresignedS3.key,
      id: PresignedS3.id,
      user: user,
    }),
  };
  }
  catch (error) {
    console.error("Error:", error );
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  }
};






