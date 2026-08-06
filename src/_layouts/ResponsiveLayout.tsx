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
      smooth: 0.2,
    });
    return () => {
      smoother.kill();
    };
  }, []);
  return (
    <div className="wrapper">
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default ResponsiveLayout;
