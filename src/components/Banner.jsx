/** @format */

import React from "react";
import banner from "../assets/banner.jpg";
const Banner = ({ children }) => {
  return (
    <div
      style={{
        "--image-url": `url(${banner})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-[image:var(--image-url)] h-screen"
    >
      {children}
    </div>
  );
};

export default Banner;
