import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAction, loginAction } from "../../redux/auth/Action";

const Login = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const { auth } = useSelector((store) => store);
  const token = localStorage.getItem("token");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(inputData));
    setOpenSnackbar(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  useEffect(() => {
    if (token) dispatch(getUserAction(token));
  }, [token]);

  useEffect(() => {
    if (auth.reqUser?.role === "ADMIN") {
      navigate("/admin/dashboard");
    } else if (auth.reqUser?.role === "USER") {
      navigate("/");
    }
  }, [auth.reqUser]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-md w-full p-6 bg-transparent rounded-lg shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
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
          <button
            type="submit"
            className="bg-gradient-to-t from-sky-500 to-indigo-500 hover:bg-gradient-to-b text-gray-200 text-xl py-2 px-4 rounded-lg w-full mt-2"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-800">Don't have an account? </span>
          <span
            onClick={() => navigate("/register")}
            className="ml-1 text-lg hover:text-gray-700 cursor-pointer"
          >
            Register
          </span>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Login success!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
