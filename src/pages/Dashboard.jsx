import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    const userData = { name: "Bagas Pratama", username: "exampleUser" };
    dispatch(loginUser(userData));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <button
          onClick={handleLogin}
          type="submit"
          className="flex w-25 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Test Login
        </button>
      </div>
    </>
  );
}

export default Dashboard;
