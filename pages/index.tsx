import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import Uploader from "../components/Uploader";
import Loader from "../components/Loader";
import Uploaded from "../components/Uploaded";
import useUpload from "../hooks/useUpload";

const Home: NextPage = () => {
  const { upload, file, error, isLoading } = useUpload();

  if (isLoading) {
    return <Loader />;
  }

  if (file) {
    return (
      <>
        <Uploaded src={file} />
        <Button onClick={() => {}}>Upload another image</Button>
      </>
    );
  }

  return <Uploader onDropFile={upload} />;
};

export default Home;
