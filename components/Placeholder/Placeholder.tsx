import { FC } from "react";
import Image from "next/image";
import style from "./Placeholder.module.css";

interface PlaceholderProps {
  className?: string;
  props?: any;
}

const Placeholder: FC<PlaceholderProps> = ({ className, ...props }) => {
  return (
    <div className={`${style.container} ${className}`} {...props}>
      <Image
        src="/image.svg"
        alt="Uploader placeholder"
        width={115}
        height={90}
      />
      <p>{"Drag & Drop your image here"}</p>
    </div>
  );
};

export default Placeholder;
