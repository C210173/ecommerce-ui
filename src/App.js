import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import CategoryManagement from "./pages/admin/CategoryManagement";
import ProductManagement from "./pages/admin/ProductManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import RatingManagement from "./pages/admin/RatingManagement";
import ReviewManagement from "./pages/admin/ReviewManagement";

function App() {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/user" element={<UserManagement />} />
      <Route path="/admin/category" element={<CategoryManagement />} />
      <Route path="/admin/product" element={<ProductManagement />} />
      <Route path="/admin/order" element={<OrderManagement />} />
      <Route path="/admin/rating" element={<RatingManagement />} />
      <Route path="/admin/review" element={<ReviewManagement />} />
    </Routes>
  );
}

export default App;
