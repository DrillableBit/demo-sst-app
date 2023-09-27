
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart


async function getPostById() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TEST}/public`);
    const data = await response.text();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const GET = async (req: Request, { params }: any) => {
  console.log("got get");

  try {
    const data = await getPostById();
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
