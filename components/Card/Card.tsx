import { FC } from "react";

const Card: FC<JSX.IntrinsicElements["div"]> = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={`p-4 flex flex-col justify-center items-center space-y-4 shadow-lg rounded-lg 
      bg-white  w-full min-w-[240px] max-w-[400px] h-[470px] m-2 
      ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
