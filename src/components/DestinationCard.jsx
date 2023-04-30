/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ data }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-64 w-full" src={data?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.destination}</h2>
          <p>
            {data?.description.slice(
              0,
              seeMore ? data.description.length : 100
            )}{" "}
            <button onClick={() => setSeeMore(!seeMore)} className="btn-link">
              {seeMore ? "see less" : "see more"}
            </button>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/booking/${data.id}`} className="button">
              Booking Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
