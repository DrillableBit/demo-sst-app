import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const backendUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getBearer(req: NextRequest) {
  const token = await getToken({ req });
  if (!token) {
    return "";
  }
  return token.token as string;
}

export async function parseUrl(url: string) {
  const segments = url.split("/api/tunnel/");

  const beforeApiTunnel = segments[0];
  const apiTunnel = "/api/tunnel/";
  const afterApiTunnel = segments[1];

  console.log("oldurl", url);
  if (
    !url ||
    !beforeApiTunnel ||
    !backendUrl ||
    !apiTunnel ||
    !afterApiTunnel
  ) {
    return { error: "missing url", status: 400 };
  }
  const newUrl = `${backendUrl}/${afterApiTunnel}`;
  console.log("newUrl", newUrl);
  return { url: newUrl, status: 200 };
}
