import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import CategoryManagement from "./pages/admin/CategoryManagement";
import ProductManagement from "./pages/admin/ProductManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import RatingManagement from "./pages/admin/RatingManagement";
import ReviewManagement from "./pages/admin/ReviewManagement";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/client/Home";
import Product from "./pages/client/Product";
import Cart from "./pages/client/Cart";
import Profile from "./pages/client/Profile";
import BrandManagement from "./pages/admin/BrandManagement";
import EditProfile from "./pages/client/EditProfile";

function App() {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/user" element={<UserManagement />} />
      <Route path="/admin/category" element={<CategoryManagement />} />
      <Route path="/admin/brand" element={<BrandManagement />} />
      <Route path="/admin/product" element={<ProductManagement />} />
      <Route path="/admin/order" element={<OrderManagement />} />
      <Route path="/admin/rating" element={<RatingManagement />} />
      <Route path="/admin/review" element={<ReviewManagement />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:productName" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/update" element={<EditProfile />} />
    </Routes>
  );
}

export default App;
