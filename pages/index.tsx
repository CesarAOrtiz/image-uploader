import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import Uploader from "../components/Uploader";
import Loader from "../components/Loader";
import Uploaded from "../components/Uploaded";
import useUpload from "../hooks/useUpload";

const Home: NextPage = () => {
  const { upload, file, error, isLoading } = useUpload();
  const [showUpload, setShowUpload] = useState(false);

  const handleUpload = (file: File) => {
    upload(file);
    setShowUpload(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (file && showUpload) {
    return (
      <>
        <Uploaded src={file} />
        <Button onClick={() => setShowUpload(false)}>
          Upload another image
        </Button>
      </>
    );
  }

  return <Uploader onDropFile={handleUpload} />;
};

export default Home;
