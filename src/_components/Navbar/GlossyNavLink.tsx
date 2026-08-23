import { NavLink, type NavLinkProps } from "react-router";
import "./GlossyNavLink.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollToPlugin);
interface GlossyNavLinkProps extends NavLinkProps {
  scrollTo?: string;
}

const GlossyNavLink = ({ scrollTo, ...props }: GlossyNavLinkProps) => {
  const { contextSafe } = useGSAP();

  const handleClick = contextSafe(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      props.onClick?.(event);

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: scrollTo ?? 0,
          offsetY: 60,
        },
        ease: "power4.out",
      });
    },
  );
  return (
    <NavLink
      className="glossy-navlink"
      onClick={handleClick}
      {...props}
      data-text={props.children}
    />
  );
};

export default GlossyNavLink;
