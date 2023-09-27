
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart

async function getPostById(id: string) {
  try {
    const identifier = id;
    const post = await fetch(
      `https://nee1j08gc3.execute-api.eu-central-1.amazonaws.com/notes`
    );
    console.log(post);
    return {
      post,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

function createNote(note: string) {
  return fetch(
    "https://nee1j08gc3.execute-api.eu-central-1.amazonaws.com/notes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note }),
    }
  );
}

export const GET = async (req: Request, { params }: any) => {
  const id = params.id;

  console.log("got get");

  try {
    const post = await getPostById(id as string);
    console.log(post);
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

export const POST = async (req: Request, { params }: any) => {
  const body = await req.json();
  const post = body;
  // const session = await getSession({ req })

  try {
    const response = await createNote(post);
    console.log(response);
    if (!post) {
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
