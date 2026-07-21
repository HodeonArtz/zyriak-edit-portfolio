import { type ReactNode } from "react";
import "./GlossyContainer.css";

const GlossyContainer = ({ children }: { children: ReactNode }) => {
  return <section className="glossy-container">{children}</section>;
};

export default GlossyContainer;
