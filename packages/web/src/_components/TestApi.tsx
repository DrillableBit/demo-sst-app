import React, { useEffect } from "react";
import { request_get } from "../_lib/fetchTools";
import { getCurrentUser } from "./../_lib/cognito";
import { useSession } from "next-auth/react";
import { secure_request_get } from '../_lib/secureFetchTools'
import { getSiteUrl } from "@/_lib/getSiteUrl";

//Shows various ways to get data. Either using the get function that wraps request in JWT auth header.
//or through using the next.js /api backend to proxy the request to the backend.

interface token {
  token: string;
}

export default function TestApi() {
  const [backendPublic, setBackendPublic] = React.useState("");
  const [backendPublicWAuth, setBackendPublicWAuth] = React.useState("");
  const [proxyPrivateWAuth, setProxyPrivateWAuth] = React.useState("");
  const [S3PresignedProxyWAuth, setS3PresignedProxyWAuth] = React.useState("");
  const [S3PresignedBackendPublicWAuth, setS3PresignedBackendPublicWAuth] =
    React.useState("");
  const session = useSession();

  useEffect(() => {
    console.log("siteurl:", getSiteUrl())
    async function fetchApi() {
      //public API without JWT authentication+
      secure_request_get({ path: "public" })
      .then((response) => {
        setBackendPublic(response.data);
      })
      .catch((error) => {
        console.log(error)
      });


      // // const response = await fetch(`${process.env.NEXT_PUBLIC_TEST}/public`);
      // const data = await response.text();
      // console.log("resp", data);
      // setBackendPublic(data);
    }

    async function fetchApiAuth() {
      //public API with JWT authentication
      secure_request_get({ path: "private" })
      .then((response) => {
        setBackendPublicWAuth(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
      // const response = await request_get({
      //   url: `${process.env.NEXT_PUBLIC_TEST}/private`,
      // });
      // console.log(" respone", response);
      // const data = await response.data;
      // setBackendPublicWAuth(data);
    }
    async function fetchS3Auth() {
      //public API with JWT authentication - S3 presigned url
      secure_request_get({ path: "presigned" })
      .then((response) => {
        console.log(response.data.key)
        setS3PresignedBackendPublicWAuth(response.data.user);
      })
      .catch((error) => {
        console.log(error)
      });

      // const response = await request_get({
      //   url: `${process.env.NEXT_PUBLIC_API_URL}/presigned`,
      // });
      // console.log(" respone", response);
      // const data = await response.data;
      // setS3PresignedBackendPublicWAuth(data.url);
    }

    async function fetchS3ApiAuth() {
      // secure_request_get({ path: "private" })
      // .then((response) => {
      //   setBackendPublicWAuth(response.data);
      // })
      // .catch((error) => {
      //   console.log(error)
      // });

      // const response = await request_get({
      //   url: `${process.env.NEXT_PUBLIC_URL}/api/test/s3`,
      // });
      // console.log(" respone", response);
      // const data = await response.data;
      // setS3PresignedProxyWAuth(data.url);
    }

    async function fetchBackApiAuth() {
      // secure_request_get({ path: "private" })
      // .then((response) => {
      //   setBackendPublicWAuth(response.data);
      // })
      // .catch((error) => {
      //   console.log(error)
      // });

      // const response = await request_get({
      //   url: `${process.env.NEXT_PUBLIC_URL}/api/test/private`,
      // });
      // console.log(" respone", response);
      // const data = await response.data;
      // setProxyPrivateWAuth(data);
    }

    fetchApi();

    const secret = (session.data?.user as any)?.token;
    if (session?.status === "authenticated") {
      fetchApiAuth();
      fetchBackApiAuth();
      fetchS3ApiAuth();
      fetchS3Auth();
    }
  }, [session]);

  return (
    <div>
      <div>
        <p>Public API Backend: {backendPublic}</p>
      </div>{" "}
      <br />
      <br />
      <div>Public API with JWT: {backendPublicWAuth}</div>
      <br />
      <br />
      <div>Proxy API with JWT: {proxyPrivateWAuth}</div>
      <br />
      <br />
      <div>Proxy API S3 presigned Url with JWT: {S3PresignedProxyWAuth}</div>
      <br />
      <br />
      <div>
        Public API S3 presigned URL with JWT: {S3PresignedBackendPublicWAuth}
      </div>
      <br />
      <br />
    </div>
  );
}
