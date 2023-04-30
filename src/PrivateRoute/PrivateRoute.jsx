/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <p>Loading...</p>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
