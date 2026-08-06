import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import "./GraphicDecoration1.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const GraphicDecoration1 = () => {
  useGSAP(() => {
    gsap.set(".most-inner-ring-chain", {
      svgOrigin: "294.12 294.12",
    });
    gsap.set(".incomplete-ring", {
      svgOrigin: "294 293",
    });

    const chainSpin = gsap.to(".most-inner-ring-chain", {
      rotation: "+=360",
      duration: 6,
      ease: "none",
      repeat: -1,
    });
    const incompleteRingSpin = gsap.to(".incomplete-ring", {
      rotation: "-=360",
      duration: 4,
      ease: "none",
      repeat: -1,
    });

    let timeout: number | undefined;

    ScrollTrigger.observe({
      target: window,
      type: "wheel,touch",

      onChange() {
        clearTimeout(timeout);

        gsap.to([chainSpin, incompleteRingSpin], {
          timeScale: -1,
          duration: 0.25,
          ease: "none",
          overwrite: true,
        });

        timeout = setTimeout(() => {
          gsap.to([chainSpin, incompleteRingSpin], {
            timeScale: 1,
            duration: 0.6,
            overwrite: true,
            ease: "none",
          });
        }, 200);
      },
    });
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <svg
      id="GraphicDecoration1"
      data-name="GraphicDecoration1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 588.23 588.23"
    >
      <g id="GraphicDecoration1-layer" data-name="Capa 1">
        <circle className="center-circle" cx="294" cy="294" r="35.71" />
        <circle className="incomplete-ring" cx="294" cy="293" r="68.72" />
        <circle
          className="ring"
          id="GraphicDecoration1-ring-1"
          cx="294"
          cy="294"
          r="125.99"
        />
        <path
          className="big-ring-chain most-inner-ring-chain"
          d="M154.21,427.57c-34.36-35.96-53.55-83.83-53.55-133.57,0-106.06,87.28-193.34,193.34-193.34s193.35,87.28,193.35,193.34"
        />
        <circle
          className="ring"
          id="GraphicDecoration1-ring-2"
          cx="294"
          cy="293"
          r="257.68"
        />
        <path
          className="small-ring-chain most-inner-ring-chain"
          d="M485.03,264.16c1.54,9.87,2.32,19.85,2.32,29.84,0,106.07-87.28,193.35-193.35,193.35-63.02,0-122.22-30.81-158.37-82.43"
        />
        <path
          className="most-outer-ring-chain"
          d="M171.16,548.39C73.7,501.33,11.5,402.23,11.5,294,11.5,139.03,139.03,11.5,294,11.5c85.36,0,166.28,38.69,219.87,105.12"
        />
        <circle
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "none",
          }}
          cx="294.12"
          cy="294.12"
          r="294.12"
        />
      </g>
    </svg>
  );
};

export default GraphicDecoration1;
