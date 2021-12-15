import type { NextPage } from "next";
import { useState } from "react";
import Uploader from "../components/Uploader";
import Loader from "../components/Loader";
import Uploaded from "../components/Uploaded";
import useUpload from "../hooks/useUpload";

const Home: NextPage = () => {
  const { upload, file, error, isLoading } = useUpload();
  const [uploaded, setUploaded] = useState<string>("");

  const onLoadReady = (file: string | ArrayBuffer | null) => {
    typeof file === "string" ? setUploaded(file) : setUploaded("");
  };

  if (isLoading) {
    return <Loader />;
  }

  if (uploaded || file) {
    return <Uploaded src={uploaded} />;
  }

  return <Uploader onDropFile={upload} onLoadReady={onLoadReady} />;
};

export default Home;
