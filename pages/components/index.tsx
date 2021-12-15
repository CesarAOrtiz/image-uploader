import type { NextPage } from "next";
import { useState } from "react";
import Uploader from "../../components/Uploader";
import Loader from "../../components/Loader";
import Uploaded from "../../components/Uploaded";

const Home: NextPage = () => {
  const [uploaded, setUploaded] = useState<string>("/uploaded.jpg");
  const onLoadReady = (file: string | ArrayBuffer | null) => {
    typeof file === "string" ? setUploaded(file) : setUploaded("");
  };
  return (
    <>
      <Uploader onLoadReady={onLoadReady} />
      <Loader />
      <Uploaded src={uploaded} />
    </>
  );
};

export default Home;
