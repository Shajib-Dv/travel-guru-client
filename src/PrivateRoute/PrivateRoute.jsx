/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <p className="text-yellow-500 text-center text-5xl mt-32 font-semibold">
        Loading...
      </p>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/signin" replace />;
};

export default PrivateRoute;
