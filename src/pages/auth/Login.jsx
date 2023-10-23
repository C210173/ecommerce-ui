import React, { useEffect, useState } from "react";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAction, loginAction } from "../../redux/auth/Action";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reqUser = useSelector((store) => store.auth.reqUser);
  const token = localStorage.getItem("token");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (e) => {
      try {
        const resData = await dispatch(loginAction(e));
        if (resData && resData.jwt) {
          setError(false);
          setMessage("Login success!");
          setOpenSnackbar(true);
        }
      } catch (error) {
        const response = error.response;
        if (response && response.data) {
          setError(true);
          setMessage(response.data.message);
        } else {
          setError(true);
          setMessage("An error occurred");
        }
        setOpenSnackbar(true);
      }
    },
  });
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  useEffect(() => {
    if (token) dispatch(getUserAction(token));
    // eslint-disable-next-line
  }, [token]);
  useEffect(() => {
    if (reqUser?.role === "ADMIN") {
      navigate("/admin/dashboard");
    } else if (reqUser?.role === "USER") {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [reqUser]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-md w-full px-6 py-2 bg-white rounded-lg">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-[100px] h-[100px] mx-auto"
          src="https://res.cloudinary.com/dttlhvsas/image/upload/v1698022545/H_1_t7duwz.png"
          alt="Logo"
        />
        <h2 className="text-2xl font-semibold">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            login
          </Button>
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
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        {error ? (
          <Alert
            onClose={handleSnackbarClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        ) : (
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default Login;
