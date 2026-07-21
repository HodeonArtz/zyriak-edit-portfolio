import React from "react";
import "./Img.css";

const Img = ({
  glossy,
  className,
  ...imgProps
}: { glossy?: boolean | undefined } & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  if (!glossy) return <img {...imgProps} className={className} />;
  return (
    <div className={`glossy-image ${className}`}>
      <img {...imgProps} className={"glossy-image__img"} />
      <img src="vectors/glass_overlay.svg" className="glossy-image__gloss" />
    </div>
  );
};

export default Img;
