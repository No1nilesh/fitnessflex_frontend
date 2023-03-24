import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated, user, allowedRole }) => {

  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (user.role !== allowedRole) {
    return <Navigate to="/" />;
  }
  
  return children;
};

export default ProtectedRoute;
