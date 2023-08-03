import React, { useState, useEffect } from "react";
import axios from "../../../services/api";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DoctorLoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setDoctorId(foundUser.doctorId);
      setDoctorName(foundUser.doctorName);
      navigate("/doctor/");
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/auth", { email, password })
      .then((response) => {
        const user = {
          doctorId: response.data.doctorId,
          doctorName: response.data.doctorName,
        };
        localStorage.setItem("user", JSON.stringify(user));
        setDoctorId(response.data.doctorId);
        setDoctorName(response.data.doctorName);
        toast.success("Logged in successfully");
        setTimeout(() => {
          navigate("/doctor");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="flex justify-center place-items-center place-center  align-items-center">
      <div className="w-full max-w-xl">
        <form
          className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow focus:bg-slate-600  focus:text-white fo appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow  focus:bg-slate-600 focus:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
            <button
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login as Doctor
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorLoginForm;
