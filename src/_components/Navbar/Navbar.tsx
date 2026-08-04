import "./Navbar.css";
import GlossyNavLink from "./GlossyNavLink";
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator";
const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__content">
        <nav className="navbar">
          <GlossyNavLink to="/">Home</GlossyNavLink>
          <VerticalSeparator />
          <GlossyNavLink to="/#works">Works</GlossyNavLink>
          <VerticalSeparator />
          <GlossyNavLink to="/#socials">Socials</GlossyNavLink>
        </nav>
      </div>
      <div className="navbar__spacebar">&nbsp;</div>
    </div>
  );
};

export default Navbar;
