import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authenticated from "../middleware/Authenticated";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Guest from "../middleware/Guest";

function Router() {
  return (
    <>
      <Routes>
        {/* Route auth */}
        <Route element={<Authenticated />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* Tutup Route auth */}
        {/* Route guest */}
        <Route element={<Guest />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* Tutup Route guest */}
      </Routes>
    </>
  );
}

export default Router;
