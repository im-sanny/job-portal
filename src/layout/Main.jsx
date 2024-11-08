import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <Outlet></Outlet>
      {/* Footer */}
      <footer>footer</footer>
    </div>
  );
};

export default Main;
