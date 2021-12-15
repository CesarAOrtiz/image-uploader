import { FC } from "react";
import style from "./Progressbar.module.css";

interface Props {}

const Progressbar: FC<Props> = () => {
  return (
    <div className="w-[100%] h-2 rounded-md bg-gray-100 overflow-x-hidden shadow-md">
      <div
        className={`${style.animate} w-[25%] h-[100%] rounded-md bg-blue-500 translate-x-full`}
      ></div>
    </div>
  );
};

export default Progressbar;
