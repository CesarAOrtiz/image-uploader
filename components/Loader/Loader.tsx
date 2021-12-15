import { FC } from "react";
import Card from "../Card";
import Progressbar from "../Progressbar";

const Loader: FC = () => {
  return (
    <Card className="px-8 py-4 h-[140px]">
      <h2 className="text-xl font-medium">Uploading...</h2>
      <Progressbar />
    </Card>
  );
};

export default Loader;
