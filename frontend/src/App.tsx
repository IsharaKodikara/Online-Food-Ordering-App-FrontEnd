import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import FoodPage from "./pages/FoodPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import OrdersPage from "./pages/OrdersPage";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
return (

  <BrowserRouter>

<Routes>
    <Route path="/" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/foods" element={<FoodPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/payment" element={<PaymentPage />} />
    <Route path="/orders" element={<OrdersPage />} />
    <Route path="/admin" element={<ProtectedRoute role="ADMIN"> <AdminDashboard /> </ProtectedRoute>} />
</Routes>

    </BrowserRouter>

  );
}

export default App;