/** @format */

import React from "react";
import Iframe from "react-iframe";

const Contact = () => {
  return (
    <div className="w[90%] md:w-4/5 h-3/4 mx-auto md:mt-8 mt-4 backdrop-blur-sm bg-transparent">
      <h1 className="text-yellow-500 text-center font-semibold text-3xl">
        Have a relax Broooo...
      </h1>
      <Iframe
        url="https://www.youtube.com/embed/VWZaBs1qRhc"
        width="full"
        height="full"
        title="Panama - Matteo (Lyrics/TikTok Remix)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="w-full h-full rounded-sm p-10"
        display="block"
        position="relative"
      />
    </div>
  );
};

export default Contact;
