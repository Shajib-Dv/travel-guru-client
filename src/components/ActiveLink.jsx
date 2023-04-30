/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "bg-indigo-300 text-black px-3 py-2 rounded-md"
          : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
