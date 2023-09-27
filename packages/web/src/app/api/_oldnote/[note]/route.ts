
import { NextResponse } from "next/server";

import { headers } from 'next/headers'
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart

async function getPostById(id: string, authorizationHeader: string) {

  try {
    console.log("ID notes, get /notes")
    const identifier = id;
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/notes`,
      { method: "GET",
        headers: {
          Authorization: `${authorizationHeader}`,
        },
      }
    );
    const posts = await data.json();
    return {
      posts,
    };
  } catch (error) {
    return null;
  }
}

export const GET = async (req: Request, { params }: any) => {
  const id = params.id;

  const headersInstance = headers()
  const authorizationHeader = headersInstance.get('authorization')

  if(!authorizationHeader) {
    return NextResponse.json(
      { message: "No Bearer token" },
      {
        status: 401,
      }
    );
  }


  try {
    const post = await getPostById(id as string, authorizationHeader);
    console.log("Outisde, ", post);
    if (!post) {
      return NextResponse.json(
        { message: "Please enter title" },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json( post , { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while fetching the post" },
      { status: 500 }
    );
  }
};
