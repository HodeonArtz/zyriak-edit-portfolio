import React, { type ReactNode } from "react";
import "./Img.css";

const Img = ({
  glossy,
  className,
  children,
  ...imgProps
}: {
  glossy?: boolean | undefined;
  children?: ReactNode;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  if (!glossy) return <img {...imgProps} className={className} />;
  return (
    <div className={`glossy-image ${className}`}>
      {children ? (
        children
      ) : (
        <img {...imgProps} className={"glossy-image__img"} />
      )}
      <img
        src="vectors/glass_overlay.svg"
        className="glossy-image__gloss"
        alt="image-fa-gloss-overlay"
      />
    </div>
  );
};

export default Img;
