
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";
import { headers } from 'next/headers'
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart

interface Note {
  content: string;
}


async function getPostById(id: string, authorizationHeader: string) {
  try {
    console.log("sending post", authorizationHeader)
    const identifier = id;
    const post = await fetch(
      `${process.env.NEXTAUTH_URL}/notes`,
      { method: "GET",
        headers: {
          Authorization: `${authorizationHeader}`,
        },
      }
    );
    return {
      post,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function createNote(note: Note, authorizationHeader: string) {
  try {
    console.log("sending fetch", authorizationHeader)
    console.log(note.content)
    return fetch(
      `${process.env.NEXTAUTH_URL}/notes`,
      {
        method: "POST",
        headers: {
           Authorization: `${authorizationHeader}`,
        },
        body: JSON.stringify( note ),
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const GET = async (req: Request, { params }: any) => {
  const id = params.id;
  const headersInstance = headers()
  const authorizationHeader = headersInstance.get('authorization')
  console.log("header", authorizationHeader)
  if(!authorizationHeader) {
    return NextResponse.json(
      { message: "No Bearer token" },
      {
        status: 401,
      }
    );
  }
  console.log("got get");

  try {
    const post = await getPostById(id as string, authorizationHeader);
    if (!post) {
      return NextResponse.json(
        { message: "Please enter title" },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while fetching the post" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  const body = await req.json();

  // const session = await getSession({ req })
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

    const response = await createNote(body.note, authorizationHeader);
    // console.log(response);
    if (!body) {
      return NextResponse.json(
        { message: "Please enter title" },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while fetching the post" },
      { status: 500 }
    );
  }
};
