"use client";
import React from "react";
import { postFile } from "@/_lib/fileTools";
import { useSession } from "next-auth/react";

function Page() {
  const session  = useSession();
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold">How to upload files to S3</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            try {
              const file = (e.target as HTMLFormElement).file.files?.[0]!;
              if (!file) {
                console.error("File not selected.");
                return;
              }
              const response = await postFile({ file });

              if (response.status !== 200) {
                console.error(`Upload failed with status: ${response.status}`);
                return;
              }
              if (!response.config.url) {
                console.error("Upload failed, no URL returned.");
                return;
              }
              window.location.href = response.config.url.split("?")[0];
            } catch (error) {
              console.error(`An error occurred: ${error}`);
            }
          }}
        >
          <input name="file" type="file" accept="image/png, image/jpeg" />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
}

export default Page;
