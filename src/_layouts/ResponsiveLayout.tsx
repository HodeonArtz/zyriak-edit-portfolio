import { Outlet } from "react-router";
import "./ResponsiveLayout.css";
import Navbar from "../_components/Navbar/Navbar";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollSmoother);

const ResponsiveLayout = () => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".container",
      effects: true,
      smooth: 0.2,
    });

    /*     return () => {
      smoother.kill();
    }; */
  }, []);
  return (
    <div className="wrapper">
      <Navbar />
      <main className="container">
        <div className="bg-wrapper">
          <img
            src="vectors/dorfic-gradient-bg.svg"
            alt="dorfic-gradient-bg.svg"
            className="parallax-bg"
          />

          <div className="bg__grid" />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default ResponsiveLayout;
