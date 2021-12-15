import { FC } from "react";

const Button: FC<JSX.IntrinsicElements["button"]> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-md 
      rounded-lg py-2 px-4 text-white ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
