import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../UseContext/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  let location = useLocation();

  if (isLoading) {
    return (
      <div className="text-center mt-5">
         <Spinner animation="border" role="status" />
      </div>
    );
    
  }

  if (user && user?.uid) {
    return children
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
