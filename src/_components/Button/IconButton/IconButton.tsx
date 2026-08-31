import "./IconButton.css";
import "../Button.css";

import { type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";

const IconButton = ({
  className,
  children,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...props}
      className={`glossy-button glossy-action-button ${className ?? ""}`}
    >
      <span className="glossy-button__content">{children}</span>
    </button>
  );
};

export default IconButton;
