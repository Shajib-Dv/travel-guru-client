/** @format */

import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import ActiveLink from "../ActiveLink";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <nav className="w-full bg-transparent ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <img className="w-24" src={logo} alt="logo" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center font-bold  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="relative flex items-center ">
                  <input
                    type="text"
                    placeholder="Search your destination"
                    className="search"
                  />
                  <span className="absolute right-5">
                    <FaSearch />
                  </span>
                </li>
                <li className="text-white hover:text-indigo-500">
                  <ActiveLink to="/news">News</ActiveLink>
                </li>
                <li className="text-white hover:text-indigo-500">
                  <ActiveLink to="/destination">Destination</ActiveLink>
                </li>
                <li className="text-white hover:text-indigo-500">
                  <ActiveLink to="/blog">Blog</ActiveLink>
                </li>
                <li className="text-white hover:text-indigo-500">
                  <ActiveLink to="/contact">Contact</ActiveLink>
                </li>
              </ul>
              <div className="mt-3 space-y-2 lg:hidden md:hidden">
                {user && (
                  <a className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                    {user?.email}
                  </a>
                )}
                <Link
                  to="/signin"
                  className="inline-block w-full px-4 py-2 text-center text-black hover:text-white bg-yellow-500 rounded-md shadow hover:bg-gray-800"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            {user && (
              <a className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                {user?.email}
              </a>
            )}
            {user ? (
              <button onClick={() => logOut()} className="btn btn-warning">
                Log out
              </button>
            ) : (
              <Link
                to="/signin"
                className="px-4 py-2 text-black hover:text-white bg-yellow-500 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
