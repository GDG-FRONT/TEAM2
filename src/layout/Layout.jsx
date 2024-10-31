import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="content-container">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
