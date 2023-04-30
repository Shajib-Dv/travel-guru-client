/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingForm from "./BookingForm";

const Booking = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <>
      {data?.id ? (
        <div className="w-[90%] md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-32">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">
              {data?.destination}
            </h1>
            <p>{data?.description}</p>
          </div>
          <div>
            <BookingForm>{data?.destination}</BookingForm>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-yellow-600 my-32 text-5xl">
          No data found ! Please Visit the correct route
        </h1>
      )}
    </>
  );
};

export default Booking;
