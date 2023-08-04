import AWS from 'aws-sdk';

const config = {
  s3: {
    REGION: process.env.NEXT_PUBLIC_REGION,
    BUCKET: process.env.NEXT_PUBLIC_BUCKET,
  },
  apiGateway: {
    REGION: process.env.NEXT_PUBLIC_REGION,
    URL: process.env.NEXT_PUBLIC_API_URL,
  },
  cognito: {
    REGION: process.env.NEXT_PUBLIC_REGION,
    USER_POOL_ID: process.env.NEXT_PUBLIC_USER_POOL_ID,
    APP_CLIENT_ID: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
  },
};

AWS.config.update({
  region: config.cognito.REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: config.cognito.IDENTITY_POOL_ID,
  }),
});

export { AWS, config };