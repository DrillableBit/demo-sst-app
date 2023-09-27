"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";

import Loading from "@/_components/_props/Loading";
import List from "@/_components/_display/List";
import { request_get } from "@/_lib/fetchTools";
import { getCurrentUser } from "@/_lib/cognito";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { secure_request_get } from "@/_lib/secureFetchTools";
import handleError from "@/_lib/handleError";


function Page() {
  const [loading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const session = useSession();



  useEffect(() => {
    // const secret = (session.data?.user as any)?.token;
    // async function fetchApi() {
    //   setLoading(true)
    //   const response = await request_get({
    //     url: `${process.env.NEXT_PUBLIC_API_URL}/notes`,
    //   });
    //   console.log("listResp", response)
    //   setLoading(false);
    //   setItems(response.data);
    // }

    // if (session.status === "authenticated") {
    //   fetchApi();
    // }
    secure_request_get({ path: "notes" })
    .then((response) => {
      if (!response) {
        handleError(response);
        throw new Error('Fetch error');

      }
      return response.data;
    })
    .then((data) => {
      setItems(data); 
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error.toString());
      setIsLoading(false);
    });


  }, [session]);

  return (
    <>
     
      <div className="text-center">
        <Link href={"/note/create"} className="border border-gray-500 p-2">Create Note</Link>
        <h1>Your notes:</h1>
        {loading ? <Loading /> : <List items={items} />}
      </div>
    </>
  );
}

export default Page;
