import AnimatedDorficWaveGraphic from "../AnimatedDorficWaveGraphic/AnimatedDorficWaveGraphic";
import "./Page3DBackground.css";

const Page3DBackground = () => {
  return (
    <div className="bg-wrapper">
      <img
        src="vectors/dorfic-ellipse-color-burn-dark.svg"
        alt="dorfic-ellipse-color-burn-dark.svg"
        className="bg__ellipse-burn-dark"
      />
      <img
        src="vectors/dorfic-ellipse-color-burn.svg"
        alt="dorfic-ellipse-color-burn.svg"
        className="bg__ellipse-burn"
      />
      <img
        src="vectors/dorfic-gradient-bg.svg"
        alt="dorfic-gradient-bg.svg"
        className="parallax-bg"
      />
      <AnimatedDorficWaveGraphic className="bg__dorfic-wave-graphic" />
      <div className="bg__grid" />
    </div>
  );
};

export default Page3DBackground;
