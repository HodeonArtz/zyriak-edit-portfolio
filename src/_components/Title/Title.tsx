import "./Title.css";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2";
  children?: string | undefined;
}

const Title = ({
  as: Tag = "h1",
  children,
  className,
  ...props
}: TitleProps) => {
  return (
    <Tag {...props} className={`title ${className ?? ""}`} data-text={children}>
      {children}
    </Tag>
  );
};

export default Title;
