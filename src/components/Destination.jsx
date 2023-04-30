/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import DestinationCard from "./DestinationCard";
import Navbar from "./Header/Navbar";

const Destination = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="md:w-4/5 mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data && data.map((d) => <DestinationCard key={d.id} data={d} />)}
        </div>
      </div>
    </>
  );
};

export default Destination;
