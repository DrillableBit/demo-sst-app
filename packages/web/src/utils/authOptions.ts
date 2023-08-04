import NextAuth, { NextAuthOptions } from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"
const clientId = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID as string
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET as string
const PoolId = process.env.NEXT_PUBLIC_USER_POOL_ID as string
const region = process.env.NEXT_PUBLIC_REGION as string

export const authOptions:NextAuthOptions = {
    providers: [
        CognitoProvider({
            clientId: clientId,
            clientSecret: clientSecret,
            issuer: `https://cognito-idp.${region}.amazonaws.com/${PoolId}`,
        }),
    ],
    pages: {
        signIn: "/login",
        signOut: "/signout",
        error: "/auth/error", // Error code passed in query string as ?error=
    },
}
export default NextAuth(authOptions)