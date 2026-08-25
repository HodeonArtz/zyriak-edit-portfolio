import "./Navbar.css";
import GlossyNavLink from "./GlossyNavLink";
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../Title/Title";
import IconButton from "../Button/IconButton/IconButton";
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false),
    [isDesktop, setIsDesktop] = useState<boolean>(false);
  useGSAP(() => {
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(max-width: 1024px)", () => {
      setIsDesktop(false);
      gsap.set(".navbar", {
        style: "",
      });
    });
    matchMedia.add("(min-width: 1024px)", () => {
      setShowMenu(false);
      setIsDesktop(true);
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
  }, [showMenu, isDesktop]);

  function handleOnToggleMenu() {
    setShowMenu((isMenuShown) => !isMenuShown);
  }
  function handleCloseMenu() {
    setShowMenu(false);
  }
  return (
    <div className="navbar__wrapper navbar--white">
      {(isDesktop || showMenu) && (
        <div className="navbar__content">
          <div className="navbar__header">
            <Title className="navbar__heading" as="h2">
              Menu
            </Title>
          </div>
          <nav className="navbar">
            <GlossyNavLink className="navbar__link" to="/">
              <span>Home</span>
            </GlossyNavLink>
            <VerticalSeparator className="navbar__vertical-separator" />
            <GlossyNavLink
              className="navbar__link"
              scrollTo="#works-section"
              to="/#works-section"
            >
              <span>Works</span>
            </GlossyNavLink>
            <VerticalSeparator className="navbar__vertical-separator" />
            <GlossyNavLink
              className="navbar__link"
              scrollTo="#socials-section"
              to="/#socials-section"
            >
              <span>Socials</span>
            </GlossyNavLink>
          </nav>
        </div>
      )}
      <div className="navbar__interaction-section">
        <svg
          height="1000"
          width="1000"
          xmlns="http://www.w3.org/2000/svg"
          className="navbar__menu-mask-shape"
        >
          <circle r="500" cx="500" cy="500" fill="black" />
        </svg>
        <IconButton
          className="navbar__menu-button"
          onClick={handleOnToggleMenu}
        >
          <IconMenu />
        </IconButton>
      </div>
      <div className="navbar__spacebar">&nbsp;</div>
    </div>
  );
};

export default Navbar;
