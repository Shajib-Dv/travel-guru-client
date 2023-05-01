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
            {destinationData?.destination || "safe and sound"}
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
          <iframe
            className="w-full h-screen rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24933407057!2d91.9204992358945!3d21.45103776170327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1682899313051!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default BookingProcess;
