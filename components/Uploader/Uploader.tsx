import { FC } from "react";
import Card from "../Card";
import Placeholder from "../Placeholder";
import Button from "../Button";

const Uploader: FC = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h2>Upload your image</h2>
      <Placeholder />
      <p>Or</p>
      <Button text="Choose a file" />
    </Card>
  );
};

export default Uploader;
