import { Outlet } from "react-router";
import "./ResponsiveLayout.css";
import Navbar from "../_components/Navbar/Navbar";

const ResponsiveLayout = () => {
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
