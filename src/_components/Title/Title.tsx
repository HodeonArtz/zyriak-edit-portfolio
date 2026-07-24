import type { ReactNode } from "react";
import "./Title.css";

interface TitleProps {
  as?: "h1" | "h2";
  children?: ReactNode | undefined;
}

const Title = ({ as: Tag = "h1", children }: TitleProps) => {
  return <Tag className="title">{children}</Tag>;
};

export default Title;
