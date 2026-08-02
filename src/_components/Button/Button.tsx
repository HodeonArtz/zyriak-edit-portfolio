import "./Button.css";

interface ButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  color?: "default" | "yt" | "ig" | "tiktok" | "blue";
}

const Button = ({
  color = "default",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`glossy-button ${className} ${color ? `glossy-button--${color}` : ""}`}
    >
      <img
        src="vectors/glass_overlay_button.svg"
        className="glossy-button__gloss"
      />
      <span className="glossy-button__content">{children}</span>
    </button>
  );
};

export default Button;
