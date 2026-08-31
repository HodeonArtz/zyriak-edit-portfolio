import React, { type ReactNode } from "react";
import "./Img.css";

export interface ImgProps extends React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> {
  glossy?: boolean | undefined;
  children?: ReactNode;
}

const Img = ({ glossy, className, children, ...imgProps }: ImgProps) => {
  if (!glossy) return <img {...imgProps} className={className} />;
  return (
    <div className={`glossy-image ${className ?? ""}`}>
      {children ? (
        children
      ) : (
        <img {...imgProps} className={"glossy-image__img"} />
      )}
      <img
        src="vectors/glass_overlay.svg"
        className="glossy-image__gloss"
        alt="image-fa-gloss-overlay"
        aria-hidden
      />
    </div>
  );
};

export default Img;
