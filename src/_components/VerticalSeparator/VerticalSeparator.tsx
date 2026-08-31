import "./VerticalSeparator.css";

interface VerticalSeparatorProps {
  className?: string;
}

const VerticalSeparator = ({ className }: VerticalSeparatorProps) => {
  return <hr className={`vertical-hr ${className ?? ""}`} />;
};

export default VerticalSeparator;
