import { NavLink, type NavLinkProps } from "react-router";
import "./GlossyNavLink.css";

const GlossyNavLink = (props: NavLinkProps) => {
  return (
    <NavLink className="glossy-navlink" {...props} data-text={props.children} />
  );
};

export default GlossyNavLink;
