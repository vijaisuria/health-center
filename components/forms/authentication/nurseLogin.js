import React, { useState, useEffect } from "react";
import axios from "../../../services/api";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NurseLoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nurseId, setNurseId] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("nurse");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setNurseId(foundUser.nurseId);
      navigate("/nurse");
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/auth/nurse", { email, password })
      .then((response) => {
        const nurse = {
          nurseId: response.data.nurseId,
        };
        localStorage.setItem("nurse", JSON.stringify(nurse));
        setNurseId(response.data.nurseId);
        toast.success("Logged in successfully");
        setTimeout(() => {
          navigate("/nurse");
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
              required
              value={email}
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
              required
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-between flex-col gap-2 md:flex-row">
            <button
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
              type="submit"
            >
              Login as Nurse
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

export default NurseLoginForm;
