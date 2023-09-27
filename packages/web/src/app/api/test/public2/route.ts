
import { NextResponse } from "next/server";

import { Config } from "sst/node/config";
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// for making a cookie cart

async function getPostById() {
  try {
    console.log("Stripe", Config.STRIPE_KEY)
    const  data  = "Hello Stranger..."
    console.log("userid", 123,  process.env.NEXT_PUBLIC_USER_POOL_ID)
    console.log("Stripe", Config.STRIPE_KEY)
    console.log(data)
    return data;
  } catch (error) {
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
    return NextResponse.json(data , { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while fetching the post" },
      { status: 500 }
    );
  }
};
