import { CSSProperties, FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: any) => void;
}

const Button: FC<ButtonProps> = ({ text, className, style, onClick }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClickCapture={(e) => {
        onClick && onClick(e);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
