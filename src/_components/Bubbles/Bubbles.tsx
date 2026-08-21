import "./Bubbles.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Bubbles = () => {
  const BUBBLES_CONFIG = {
    BUBBLES_COUNT: 12,
    X: {
      MIN: 500,
      MAX: 780,
    },
    Y: {
      MIN: 0,
      MAX: 2400,
    },
  };

  const bubbleYPositions: number[] = Array(BUBBLES_CONFIG.BUBBLES_COUNT).fill(
    0,
  );

  useGSAP(() => {
    function getRandomXPosition(index: number) {
      const randomXPosition = gsap.utils.random(
        BUBBLES_CONFIG.X.MIN,
        BUBBLES_CONFIG.X.MAX,
        20,
      );

      const sidePosition = [1, -1][index % 2];
      return randomXPosition * sidePosition;
    }
    function getRandomYPosition(index: number) {
      let randomYPosition: number;
      do {
        randomYPosition = gsap.utils.random(
          BUBBLES_CONFIG.Y.MIN,
          BUBBLES_CONFIG.Y.MAX,
          BUBBLES_CONFIG.Y.MAX / BUBBLES_CONFIG.BUBBLES_COUNT,
        );
      } while (bubbleYPositions.includes(randomYPosition));
      bubbleYPositions[index] = randomYPosition;

      return randomYPosition;
    }
    gsap.set(".bubble", {
      x: getRandomXPosition,
      y: getRandomYPosition,
    });
    return () => {
      bubbleYPositions.fill(0);
    };
  }, []);
  return (
    <div className="bubbles-wrapper">
      {Array(BUBBLES_CONFIG.BUBBLES_COUNT)
        .fill(0)
        .map(() => (
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bubble"
          >
            <path
              d="M150 1C232.29 1 299 67.7096 299 150C299 232.29 232.29 299 150 299C67.7096 299 1 232.29 1 150C1 67.7096 67.7096 1 150 1Z"
              fill="#FDB14E"
              fillOpacity="0.29"
              stroke="url(#paint0_linear_734_397)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_734_397"
                x1="-1151.57"
                y1="-117.132"
                x2="-1151.57"
                y2="182.868"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FBEEC3" />
                <stop offset="0.519231" stopColor="#FFD5A9" />
                <stop offset="0.985577" stopColor="#FFEFD1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        ))}
    </div>
  );
};

export default Bubbles;
