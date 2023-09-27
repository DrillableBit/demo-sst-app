"use client";

import { useEffect, useState } from "react";
import { request_get, request_delete } from "@/_lib/fetchTools";
import Loading from "@/_components/_props/Loading";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { secure_request_get, secure_request_delete } from "@/_lib/secureFetchTools";
import handleError from "@/_lib/handleError";

interface PageProps {
  params: {
    slug: string;
    id: string;
  };
}

interface Item {
  createdAt: string;
  userId: string;
  content: string;
  noteId: string;
  attachment: string;
  image: {
    url: string;
  }
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [item, setItem] = useState<Item | null>(null);
  const  session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!params.id) {
      return;
    }

    async function GetItem() {
      secure_request_get({ path: `notes/${params.id}` })
      .then((response) => {
        if (!response) {
          handleError(response);
          throw new Error('Fetch error');

        }
        return response.data;
      })
      .then((data) => {
        setItem(data); 
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });  
    }
    GetItem();
  }, [params.id]);

  async function DeleteItem() {
    const response = await secure_request_delete({
      path: `notes/${params.id}`,
    });
    if (response.status === 200) {
      router.push("/note");
    }
    console.log(response);
  }

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold"></h1>
        <p className="text-lg mt-4">Note id: {params.id}</p>
        {item ? (
          <div>
            <p>Created At: {item.createdAt}</p>
            <p>User ID: {item.userId}</p>
            <p>Content: {item.content}</p>
            <p>Attachment: {item.attachment}</p>

            <Image
              alt="The guitarist in the concert."
              src={item.image.url}
              width={150}
              height={100}
              layout="responsive"
            />

            <button
              onClick={() => {
                DeleteItem();
              }}
            >
              Delete item
            </button>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Page;
