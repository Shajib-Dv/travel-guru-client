/** @format */

import React, { useContext } from "react";
import Navbar from "./Header/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BookingProcess = () => {
  const { destinationData } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="w-[90%] md:w-4/5 mx-auto md:mt-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl text-yellow-500 font-semibold">
            Stay in Paris
          </h1>
        </div>
        <div>
          <h1>map coming soon</h1>
        </div>
      </div>
    </>
  );
};

export default BookingProcess;
