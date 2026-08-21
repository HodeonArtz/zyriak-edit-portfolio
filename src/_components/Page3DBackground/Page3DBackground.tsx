import Bubbles from "../Bubbles/Bubbles";
import Honeycombs from "../Honeycombs/Honeycombs";
import "./Page3DBackground.css";

const Page3DBackground = () => {
  return (
    <div className="bg-wrapper">
      <img
        src="vectors/white-gradient-bg.svg"
        alt="dorfic-gradient-bg.svg"
        className="parallax-bg"
      />
      <img
        src="vectors/dorfic-ring.svg"
        alt="dorfic-ring.svg"
        className="bg__dorfic-ring bg__ring"
      />
      <img
        src="vectors/dorfic-ring-underlay.svg"
        alt="dorfic-ring-underlay.svg"
        className="bg__dorfic-ring-underlay bg__ring"
      />
      <Honeycombs />
      <Bubbles />
    </div>
  );
};

export default Page3DBackground;
