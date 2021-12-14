import { ReactNode, FC, CSSProperties } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  props?: any;
}

const Card: FC<CardProps> = ({ children, className, style, ...props }) => {
  return (
    <div className={`${styles.card} ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Card;
