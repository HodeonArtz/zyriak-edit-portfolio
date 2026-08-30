import "./Navbar.css";
import GlossyNavLink from "./GlossyNavLink";
import VerticalSeparator from "../VerticalSeparator/VerticalSeparator";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../Title/Title";
import IconButton from "../Button/IconButton/IconButton";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

const Navbar = () => {
  const openMenuTimelineRef = useRef<gsap.core.Timeline>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false),
    [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  useGSAP(() => {
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(max-width: 1024px)", () => {
      setIsDesktop(false);

      gsap.set(".navbar", {
        style: "",
      });
      gsap.set(".navbar__content", {
        display: "none",
      });
    });
    matchMedia.add("(min-width: 1024px)", () => {
      setIsDesktop(true);
      gsap.set(".navbar__content", {
        display: "flex",
      });
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
          invalidateOnRefresh: true,
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

    openMenuTimelineRef.current = gsap
      .timeline({
        paused: true,
        reversed: true,
      })
      .to(".navbar__content", {
        maskPosition: "60% 38%",
        duration: 0.8,
        ease: "power2.inOut",
        onStart: () =>
          gsap.set(".navbar__content", {
            display: "flex",
          }),
        onReverseComplete: () =>
          gsap.set(".navbar__content", {
            display: "none",
          }),
      });

    return () => {
      matchMedia.revert();
      openMenuTimelineRef.current = null;
    };
  });

  const handleOnToggleMenu = () => {
    const timeline = openMenuTimelineRef.current;

    if (!timeline) return;
    setIsMenuOpened(openMenuTimelineRef.current?.reversed() || false);
    if (timeline.reversed()) {
      timeline.play();
    } else {
      timeline.reverse();
    }
  };
  const handleCloseMenu = () => {
    if (isDesktop) return;

    const timeline = openMenuTimelineRef.current;
    if (!timeline) return;
    if (!isMenuOpened) return;
    setIsMenuOpened(timeline.reversed() || false);
    timeline.reverse();
  };
  return (
    <div className="navbar__wrapper navbar--white">
      <div className="navbar__content">
        <div className="navbar__header">
          <Title className="navbar__heading" as="h2">
            Menu
          </Title>
        </div>
        <nav className="navbar">
          <GlossyNavLink
            onClick={handleCloseMenu}
            className="navbar__link"
            data-text={"Home"}
            to="/"
          >
            {isDesktop ? "Home" : <span>Home</span>}
          </GlossyNavLink>
          <VerticalSeparator className="navbar__vertical-separator" />
          <GlossyNavLink
            onClick={handleCloseMenu}
            className="navbar__link"
            data-text={"Works"}
            scrollTo="#works-section"
            to="/#works-section"
          >
            {isDesktop ? "Works" : <span>Works</span>}
          </GlossyNavLink>
          <VerticalSeparator className="navbar__vertical-separator" />
          <GlossyNavLink
            onClick={handleCloseMenu}
            className="navbar__link"
            data-text={"Socials"}
            scrollTo="#socials-section"
            to="/#socials-section"
          >
            {isDesktop ? "Socials" : <span>Socials</span>}
          </GlossyNavLink>
        </nav>
      </div>

      <div className="navbar__interaction-section">
        <IconButton
          className="navbar__menu-button"
          aria-label="Navigation menu button"
          title="Open navigation menu"
          onClick={handleOnToggleMenu}
        >
          {isMenuOpened ? <IconX aria-hidden /> : <IconMenu aria-hidden />}
        </IconButton>
      </div>
      <div className="navbar__spacebar">&nbsp;</div>
    </div>
  );
};

export default Navbar;
