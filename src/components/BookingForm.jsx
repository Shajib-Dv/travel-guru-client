/** @format */

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BookingForm = ({ children }) => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex justify-center items-center bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-black font-bold mb-2"
              htmlFor="location"
            >
              Origin
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              value={location}
              required
              onChange={handleLocationChange}
            >
              <option value="" disabled>
                Select origin
              </option>
              <option value="Paris">Paris</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Cancun">Cancun</option>
              <option value="Sydney">Sydney</option>
              <option value="New York">New York </option>
              <option value="Rome">Rome </option>
              <option value="Barcelona ">Barcelona </option>
              <option value="Bali">Bali</option>
              <option value="Dubai">Dubai</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-black font-bold mb-2"
              htmlFor="category"
            >
              Destination
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              value={category}
              required
              onChange={handleCategoryChange}
            >
              <option value={children}>{children}</option>
            </select>
          </div>
          <div className="flex">
            <div className="mb-4">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="startDate"
              >
                Start Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="startDate"
                type="date"
                value={startDate}
                required
                onChange={handleStartDateChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black  font-bold mb-2"
                htmlFor="endDate"
              >
                End Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="endDate"
                type="date"
                value={endDate}
                required
                onChange={handleEndDateChange}
              />
            </div>
          </div>
          <button className="button w-full flex justify-center" type="submit">
            <Link to="/booking">Start Booking</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
