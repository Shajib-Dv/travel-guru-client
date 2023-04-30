/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "./Carousel";

const Home = () => {
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState(null);
  const [showActive, setShowActive] = useState({});

  useEffect(() => {
    fetch("https://re-travel-server-shajib-dv.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    const active = data.find((d) => d.id === activeData);
    setShowActive(active);
  }, [activeData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 mx-auto mt-32">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">
          {showActive ? showActive?.destination : "Loading..."}
        </h1>
        <p>{showActive?.description}</p>
        <Link
          className="md:w-3/12 gap-3 button"
          to={`/booking/${showActive?.id}`}
        >
          Booking
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </div>
      <div>
        <Carousel setActiveData={setActiveData} data={data} />
      </div>
    </div>
  );
};

export default Home;
