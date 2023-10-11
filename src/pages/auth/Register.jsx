import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/Auth/Action";

const Register = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.password !== inputData.confirmPassword) {
      setPasswordError("* do not match");
      return;
    } else {
      setPasswordError("");
    }
    const { confirmPassword, ...registrationData } = inputData;

    dispatch(registerAction(registrationData));
    setOpenSnackbar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-md w-full p-6 bg-transparent rounded-lg shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-900 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => handleChange(e)}
              value={inputData.email}
              className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none w-full"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-900 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => handleChange(e)}
              value={inputData.password}
              className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none w-full"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className=" text-gray-900 text-sm font-bold mb-2 flex"
            >
              Confirm Password
              {passwordError && (
                <p className="text-white font-light pl-3">{passwordError}</p>
              )}
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
              value={inputData.confirmPassword}
              className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none w-full"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-900 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={(e) => handleChange(e)}
              value={inputData.fullName}
              className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none w-full"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-900 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              onChange={(e) => handleChange(e)}
              value={inputData.phoneNumber}
              className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none w-full"
              placeholder="Phone Number"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-t from-sky-500 to-indigo-500 hover:bg-gradient-to-b text-gray-200 text-xl py-2 px-4 rounded-lg w-full mt-2"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-800">Already have an account? </span>
          <span
            onClick={() => navigate("/login")}
            className="ml-1 text-lg hover:text-gray-700 cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Create Account success!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
