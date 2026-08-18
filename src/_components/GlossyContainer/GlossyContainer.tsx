import { type ReactNode } from "react";
import "./GlossyContainer.css";

interface GlossyContainerProps {
  children?: ReactNode;
  id?: string;
}

const GlossyContainer = (props: GlossyContainerProps) => {
  return (
    <section {...props} className="glossy-container glossy-container--dorfic" />
  );
};

export default GlossyContainer;
