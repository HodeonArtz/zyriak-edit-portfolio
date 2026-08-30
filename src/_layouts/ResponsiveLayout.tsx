import { Outlet } from "react-router";
import "./ResponsiveLayout.css";
import Navbar from "../_components/Navbar/Navbar";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Page3DBackground from "../_components/Page3DBackground/Page3DBackground";

gsap.registerPlugin(useGSAP, ScrollSmoother);

const ResponsiveLayout = () => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".container",
      effects: true,
      smooth: 0.2,
    });

    return () => {
      smoother.kill();
    };
  }, []);
  return (
    <div className="wrapper">
      <Navbar />
      <main aria-label="Main content of homepage" className="container">
        <Page3DBackground />
        <Outlet />
      </main>
    </div>
  );
};

export default ResponsiveLayout;
