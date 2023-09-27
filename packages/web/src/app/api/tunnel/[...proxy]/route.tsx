import { getBearer, parseUrl } from "@/_lib/apiRouteTools";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
async function handler(req: NextRequest, res: NextResponse) {
  try {
    const newUrl = await parseUrl(req.nextUrl.href);
    const accesstoken = await getBearer(req);
    if( newUrl.error === "missing url" || accesstoken === ""){
      return NextResponse.json(
        {
          response: "server error",
        },
        {
          status: 400,
        }
      );
    }

    if (req.method === "GET") {
      // console.log("accestoken", accesstoken)
      const response = await axios.get(`${newUrl.url}`, {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      });
      if (response.status === 200) {
        // console.log("Response inside Get", response);
        return NextResponse.json(
          {
            response: response.data,
          },
          {
            status: 200,
          }
        );
      } else {
        // console.log("Response inside Get err", response)
        return NextResponse.json(
       
          {
            response: "server error",
          },
          {
            status: response.status,
          }
        );
      }
    }

    if (req.method === "POST") {
      const body = await req.json();
      console.log("body: ", body)
      const response = await axios.post(`${newUrl.url}`, body,{
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      });
      if (response.status === 200) {
        // console.log("Response inside Post", response);
        return NextResponse.json(
          {
            response: response.data,
          },
          {
            status: 200,
          }
        );
      } else {
        return NextResponse.json(
          {
            response: "server error",
          },
          {
            status: response.status,
          }
        );
      }
    }

    if (req.method === "PUT") {
      const response = await axios.put(`${newUrl.url}`, {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      });
      if (response.status === 200) {
        // console.log("Response inside put", response);
        return NextResponse.json(
          {
            response: response.data,
          },
          {
            status: 200,
          }
        );
      } else {
        return NextResponse.json(
          {
            response: "server error",
          },
          {
            status: response.status,
          }
        );
      }
    }

    if (req.method === "DELETE") {
      const response = await axios.delete(`${newUrl.url}`, {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      });
      if (response.status === 200) {
        // console.log("Response inside delete", response);
        return NextResponse.json(
          {
            response: response.data,
          },
          {
            status: 200,
          }
        );
      } else {
        return NextResponse.json(
          {
            response: "server error",
          },
          {
            status: response.status,
          }
        );
      }
    }
  } catch (error) {
    console.log("error", error);
    return NextResponse.json("Tunnel error");
  }
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
