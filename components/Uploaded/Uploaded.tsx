import { FC } from "react";
import Image from "next/image";
import style from "./Uploaded.module.css";
import Card from "../Card";
import Button from "../Button";

interface Props {
  url: string;
}

const Uploaded: FC<Props> = ({ url }) => {
  return (
    <Card className={style.container}>
      <h2>Uploaded Successfully</h2>
      <Image
        src={url}
        width={330}
        height={220}
        className={style.image}
        alt="Uploaded image"
      />
      <div className={style.input}>
        <input type="text" defaultValue={url} disabled />
        <Button text="Copy link" />
      </div>
    </Card>
  );
};
export default Uploaded;
