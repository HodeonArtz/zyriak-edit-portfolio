import { Outlet } from "react-router";
import "./ResponsiveLayout.css";

const ResponsiveLayout = () => {
  return (
    <div className="wrapper">
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default ResponsiveLayout;
