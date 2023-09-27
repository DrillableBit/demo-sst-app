
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers } from 'next/headers'

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart

async function getPostById(authorizationHeader: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/presigned`, {
      headers: {
        Authorization: `${authorizationHeader}`,
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const GET = async (req: NextRequest) => {
    console.log("got s3")

  const headersInstance = headers()
  const authorizationHeader = headersInstance.get('authorization')

  if (!authorizationHeader) {
    return NextResponse.json(
      { message: "No Bearer token" },
      {
        status: 401,
      }
    );
  }

  try {
    const data = await getPostById(authorizationHeader);
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
