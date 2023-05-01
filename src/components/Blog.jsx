/** @format */

import React from "react";
import Iframe from "react-iframe";

const Blog = () => {
  return (
    <div className="w[90%] md:w-4/5 h-3/4 mx-auto md:mt-10 rounded-md backdrop-blur-sm bg-transparent">
      <Iframe
        url="https://assign-job.netlify.app/"
        width="full"
        height="full"
        title="Assign-9"
        frameborder="0"
        className="w-full h-full rounded-sm p-10"
        display="block"
        position="relative"
      />
    </div>
  );
};

export default Blog;
