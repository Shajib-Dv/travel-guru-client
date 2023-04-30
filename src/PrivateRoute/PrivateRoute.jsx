/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { name } = useContext(AuthContext);

  if (name) {
    return children;
  }
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
