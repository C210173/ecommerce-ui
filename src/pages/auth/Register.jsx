import React, { useState } from "react";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/auth/Action";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  fullName: yup
    .string("Enter your full Name")
    .max(15, "Must be 15 characters or less")
    .required("Full name is Required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(11, "too long"),
});

const Register = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (e) => {
      try {
        const resData = await dispatch(registerAction(e));
        if (resData && resData.jwt) {
          setError(false);
          setMessage("Account created successfully!");
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="max-w-md w-full px-6 py-2 bg-white rounded-lg">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-[100px] h-[100px] mx-auto"
          src="https://res.cloudinary.com/dttlhvsas/image/upload/v1698022545/H_1_t7duwz.png"
          alt="Logo"
        />
        <h2 className="text-2xl font-semibold">Register</h2>
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
            id="fullName"
            name="fullName"
            label="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
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
          <TextField
            fullWidth
            margin="normal"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            type="submit"
          >
            Register
          </Button>
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

export default Register;
