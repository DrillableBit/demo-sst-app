
import { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { headers } from 'next/headers'

import { getToken } from "next-auth/jwt"

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart

async function getPostById(authorizationHeader: string) {
  
  console.log( 'authorizationHeader', authorizationHeader)
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TEST}/private`, {
      headers: {
        Authorization: `Bearer ${authorizationHeader}`,
      },
    });
    const data = await response.text();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const GET = async (req: NextRequest) => {
  const token = await getToken({ req })
  console.log('token', token)
  // would rather not use http and instead use:
  const headersInstance = headers()
  const authorizationHeader = headersInstance.get('authorization')
  // const authorizationHeader =
  //   req.headers instanceof Headers
  //     ? req.headers.get("authorization")
  //     : req.headers.authorization;
  // let authorizationHeader: string | null = null;
  // if ("headers" in req) {
  //   if (req.headers instanceof Headers) {
  //     authorizationHeader = req.headers.get("authorization");
  //   } else if (typeof req.headers === "object" && req.headers !== null) {
  //     authorizationHeader =
  //       (req.headers as IncomingHttpHeaders).authorization || null;
  //   }
  // }

  if (!authorizationHeader) {
    return NextResponse.json(
      { message: "No Bearer token" },
      {
        status: 401,
      }
    );
  }

  try {
    const data = await getPostById(token?.token as string);
    if (!data) {
      return NextResponse.json(
        { message: "No response" },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while fetching the post" },
      { status: 500 }
    );
  }
};
