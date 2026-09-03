import Bubbles from "../Bubbles/Bubbles";
import Honeycombs from "../Honeycombs/Honeycombs";
import "./Page3DBackground.css";

const Page3DBackground = () => {
  return (
    <div className="bg-wrapper">
      <img
        src="/vectors/white-gradient-bg.svg"
        alt="dorfic-gradient-bg.svg"
        className="parallax-bg"
        aria-hidden
      />
      <img
        src="/vectors/dorfic-ring.svg"
        alt="dorfic-ring.svg"
        className="bg__dorfic-ring bg__ring"
        aria-hidden
      />
      <img
        src="/vectors/dorfic-ring-underlay.svg"
        alt="dorfic-ring-underlay.svg"
        className="bg__dorfic-ring-underlay bg__ring"
        aria-hidden
      />
      <Honeycombs />
      <Bubbles />
    </div>
  );
};

export default Page3DBackground;
