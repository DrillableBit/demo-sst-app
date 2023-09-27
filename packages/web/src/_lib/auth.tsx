import { NextAuthOptions  } from "next-auth";

import CognitoProvider from "next-auth/providers/cognito";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID as string;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET as string;
const PoolId = process.env.NEXT_PUBLIC_USER_POOL_ID as string;
const region = process.env.NEXT_PUBLIC_REGION as string;
const IdentityPoolId = process.env.NEXT_PUBLIC_IDENTITY_POOL_ID as string;

const issuer = `https://cognito-idp.${region}.amazonaws.com/${PoolId}`;

interface User {
  token: string;
  refreshToken: string;
  newUser?: boolean; 
}

interface JWT_AWS {
  sub: string;
  iss: string;
  client_id: string;
  origin_jti: string;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  username: string;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
  providers: [
    CognitoProvider({
      clientId: clientId,
      clientSecret: clientSecret,
      issuer: issuer,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        if (!credentials) throw new Error("No username or password provided");
        if (!credentials.username) throw new Error("No username provided");
        if (!credentials.password) throw new Error("No password provided");

        const client = new CognitoIdentityProviderClient({ region: region });
        const command = new InitiateAuthCommand({
          AuthFlow: "USER_PASSWORD_AUTH",
          ClientId: clientId,
          AuthParameters: {
            USERNAME: credentials.username,
            PASSWORD: credentials.password,
          },
        });

        try {
          const response = await client.send(command);
          if (
            response.AuthenticationResult &&
            response.AuthenticationResult.AccessToken &&
            response.AuthenticationResult.RefreshToken
          ) {
            const user: User = {
              refreshToken: response.AuthenticationResult.RefreshToken,
              token: response.AuthenticationResult.AccessToken,
            };

            const user_checked = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/create-user`,
              {
                email: credentials.username,
              },
              {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              }
            );
            const parsedBody = JSON.parse(user_checked.data.body);
            user.newUser = parsedBody.newUser;
            return user;
          } else {
            throw new Error("Authentication failed");
          }
        } catch (error) {
          throw new Error("Incorrect username or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, session }) {
      if (!token.token) return { ...token, ...user };
      const accessToken = jwt.decode(token.token as string) as JWT_AWS;
      const expiresAt = accessToken.exp * 1000;
      console.log("Time remaining:", expiresAt - Date.now());
      console.log("Time expires at:", expiresAt);
      if (expiresAt > Date.now()) return { ...token, ...user };
      console.log("Token expired. Refreshing access token...");

      if (typeof token.refreshToken !== "string") {
        console.error("Error refreshing token. No refresh token available.");
        // Add signout() logic here
        // Return status: your session is over, please log in again.
        return { ...token, ...user };
      }

      const client = new CognitoIdentityProviderClient({ region });
      const command = new InitiateAuthCommand({
        AuthFlow: "REFRESH_TOKEN_AUTH",
        ClientId: clientId,
        AuthParameters: {
          REFRESH_TOKEN: token.refreshToken,
        },
      });

      try {
        const response = await client.send(command);
        if (
          response.AuthenticationResult &&
          response.AuthenticationResult.AccessToken
        ) {
          token.token = response.AuthenticationResult.AccessToken;
          token.refreshToken = response.AuthenticationResult.RefreshToken;
          console.log("Access token refresh success")
        }
      } catch (error) {
        console.error("Error refreshing token:", error);
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },

  session: {
    strategy: "jwt",
  },
};






      // if (token.token) {
      //   const accessToken = jwt.decode(token.token as string) as JWT_AWS;
      //   const expiresAt = (accessToken.exp as number) * 1000;
      //   console.log("Time remaining,", expiresAt - Date.now());
      //   console.log("Time expires at,", expiresAt);
      //   if (expiresAt <= Date.now()) {
      //     console.log("Token expired. Refreshing access token...");
      //     const client = new CognitoIdentityProviderClient({ region: region });
      //     if (typeof token.refreshToken === "string") {
      //       const command = new InitiateAuthCommand({
      //         AuthFlow: "REFRESH_TOKEN_AUTH",
      //         ClientId: clientId,
      //         AuthParameters: {
      //           REFRESH_TOKEN: token.refreshToken,
      //         },
      //       });
      //       try {
      //         const response = await client.send(command);
      //         if (
      //           response.AuthenticationResult &&
      //           response.AuthenticationResult.AccessToken
      //         ) {
      //           token.token = response.AuthenticationResult.AccessToken;
      //           token.refreshToken = response.AuthenticationResult.RefreshToken;
      //         }
      //       } catch (error) {
      //         console.error("Error refreshing token:", error);
      //       }
      //     }
      //     else {
      //       console.error("Error refreshing token. No refresh token available.");
      //     }
      //   }
      // }