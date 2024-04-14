import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Guest() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default Guest;
