import { FC } from "react";

const Card: FC<JSX.IntrinsicElements["div"]> = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={
        `p-4 flex flex-col space-y-2 shadow-lg rounded-lg w-[100%] min-w-[240px] max-w-[400px] h-[420px]` +
        `${className} `
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
