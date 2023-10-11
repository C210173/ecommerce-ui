const requireAdmin = (getState, location, next) => {
  const userRole = getState().auth.reqUser?.role;
  console.log("User Role:", userRole);
  if (userRole === "ADMIN") {
    next();
  } else {
    next("/login");
  }
};

export default requireAdmin;
