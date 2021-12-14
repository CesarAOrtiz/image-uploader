import { FC } from "react";
import style from "./Loader.module.css";
import Card from "../Card";

const Loader: FC = () => {
  return (
    <Card
      className={style.container}
      style={{ padding: "1rem 2rem", height: 140, minHeight: 140 }}
    >
      <h2>Loading...</h2>
      <progress value="50" max="100" className={style.progress} />
    </Card>
  );
};

export default Loader;
