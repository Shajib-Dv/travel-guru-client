/** @format */

import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Header/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const navigate = useNavigate();
  // sign up func
  const { userSignUp } = useContext(AuthContext);
  //validation

  useEffect(() => {
    if (password === "") {
      setPasswordErr("");
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      setPasswordErr("Please add at least one capital letter");
      return;
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setPasswordErr("Please add at least one small letter");
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setPasswordErr("Please add one number");
      return;
    } else if (password.length < 6) {
      setPasswordErr("Password must be six char long");
      return;
    }
    setPasswordErr("");
  }, [password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPasswordErr("");
    //validation
    if (passwordErr) {
      return;
    }
    //create user
    userSignUp(email, password)
      .then((result) => {
        // console.log(result.user);
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-black font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-slate-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-black font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-slate-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-slate-200 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-slate-200 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {<p className="text-red-500 pt-2">{passwordErr}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
              type="submit"
              disabled={passwordErr || password === ""}
            >
              Register
            </button>
          </div>
          <p className="text-green-700 pt-4 font-semibold">
            Allready have an account ! please{" "}
            <Link className="text-yellow-600 btn-link" to="/signin">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
