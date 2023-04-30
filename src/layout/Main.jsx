/** @format */

import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Banner>
        <Navbar />
        <Outlet />
      </Banner>
    </>
  );
};

export default Main;
