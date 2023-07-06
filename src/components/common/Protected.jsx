import { Navigate } from "react-router-dom";
import React from "react";

const Protected = ({ children }) => {
  const loggedInUser = localStorage.getItem("authenticated");

  if (!loggedInUser) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
