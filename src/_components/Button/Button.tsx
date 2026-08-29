import "./Button.css";

type ButtonBaseProps = {
  color?: "default" | "yt" | "ig" | "tiktok" | "blue";
  children?: React.ReactNode;
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    as?: "button";
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    as: "anchor";
    href: string;
    target?: React.HTMLAttributeAnchorTarget;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const Button = (props: ButtonProps) => {
  const { color = "default", children, className } = props;
  const classes = `glossy-button ${className ?? ""} ${
    color ? `glossy-button--${color}` : ""
  }`;

  if (props.as === "anchor") {
    const { href, target, ...anchorProps } = props;

    return (
      <a {...anchorProps} className={classes} href={href} target={target}>
        <img
          src="vectors/glass_overlay_button.svg"
          alt="Button glass overlay"
          className="glossy-button__gloss"
        />
        <span className="glossy-button__content">{children}</span>
      </a>
    );
  }

  const { type, ...buttonProps } = props;

  return (
    <button {...buttonProps} type={type ?? "button"} className={classes}>
      <img
        src="vectors/glass_overlay_button.svg"
        alt="Button glass overlay"
        className="glossy-button__gloss"
      />
      <span className="glossy-button__content">{children}</span>
    </button>
  );
};

export default Button;
