import { type ReactNode } from "react";
import "./GlossyContainer.css";

interface GlossyContainerProps {
  children?: ReactNode;
  id?: string;
}

const GlossyContainer = (props: GlossyContainerProps) => {
  return <section {...props} className="glossy-container" />;
};

export default GlossyContainer;
