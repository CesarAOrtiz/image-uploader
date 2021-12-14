import type { NextPage } from "next";
import Uploader from "../components/Uploader";
import Loader from "../components/Loader";
import Uploaded from "../components/Uploaded";

const Home: NextPage = () => {
  return (
    <>
      <Uploader />
      <Loader />
      <Uploaded url="/uploaded.jpg" />
    </>
  );
};

export default Home;
