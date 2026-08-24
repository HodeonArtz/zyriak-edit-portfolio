import "./Navbar.css";
import GlossyNavLink from "./GlossyNavLink";
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../Title/Title";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

const Navbar = () => {
  useGSAP(() => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add("(min-width: 1024px)", () => {
      gsap.set(".navbar__wrapper", {
        paddingTop: "2.0625em",
        paddingBottom: "2.0625em",
      });
      gsap.set(".navbar", {
        borderRadius: "2em 0 0 2em",
      });
      gsap.to(".navbar", {
        scrollTrigger: {
          trigger: "section:first-of-type",
          start: "-=100 top",
          end: "top top",
          scrub: 0.5,
        },
        ease: "power2.inOut",
        duration: 0.2,
        width: "110%",
        borderRadius: "0em",
      });
      gsap.to(".navbar__wrapper", {
        scrollTrigger: {
          trigger: ".navbar__wrapper",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
        ease: "none",
        paddingTop: "0em",
        paddingBottom: "4.125em",
      });
    });
  }, []);

  return (
    <div className="navbar__wrapper navbar--white">
      <div className="navbar__interaction-section"></div>
      <div className="navbar__content">
        <Title className="navbar__header" as="h2">
          Menu
        </Title>
        <nav className="navbar">
          <GlossyNavLink to="/">Home</GlossyNavLink>
          <VerticalSeparator className="navbar__vertical-separator" />
          <GlossyNavLink scrollTo="#works-section" to="/#works-section">
            Works
          </GlossyNavLink>
          <VerticalSeparator className="navbar__vertical-separator" />
          <GlossyNavLink scrollTo="#socials-section" to="/#socials-section">
            Socials
          </GlossyNavLink>
        </nav>
      </div>
      <div className="navbar__spacebar">&nbsp;</div>
    </div>
  );
};

export default Navbar;
