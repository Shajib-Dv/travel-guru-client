/** @format */

import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Header/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaStar } from "react-icons/fa";

const BookingProcess = () => {
  const { destinationData } = useContext(AuthContext);

  const images = [
    "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <>
      <Navbar />
      <hr />
      <div className="w-[90%] md:w-4/5 mx-auto md:mt-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl text-yellow-500 font-semibold">
            <span className="text-white">Stay in</span>{" "}
            {destinationData?.destination}
          </h1>
          {images.map((img, idx) => (
            <div key={idx} className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-yellow-400">
                  Apartment in{" "}
                  {destinationData?.destination || "near your place"}
                </h2>
                <p className="text-gray-400 space-y-2">
                  4 guests 2 bed-room 2 beds 2 baths. AC and wifi 24/7 running
                  free meat
                </p>
                <div className="card-actions font-bold items-center justify-between">
                  <p className="flex items-center gap-2">
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                    {(Math.random() * 5).toFixed(2)} (
                    {Math.round(Math.random() * 50)})
                  </p>
                  <p className="text-2xl space-x-1 ">
                    ${Math.round(Math.random() * 100)}
                    <span className="text-2xl">/</span>
                    <span className="text-gray-400 text-xs">night</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>map coming soon</h1>
        </div>
      </div>
    </>
  );
};

export default BookingProcess;
