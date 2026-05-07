import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "@/Landing";
import SignInPage from "@/SignIn";
import SignUpPage from "@/SignUp";
import ForgotPasswordPage from "@/ForgotPassword";
import ResetPasswordPage from "@/ResetPassword";
import ProfilePage from "@/Profile";
import AdminDashboard from "@/AdminDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserPOS from "./pages/UserPOS";
import ShoppingCart from "./pages/ShoppingCart"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/sign-in" element={<SignInPage />} />
                <Route path="/auth/sign-up" element={<SignUpPage />} />
                <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
                <Route path="/auth/profile" element={<ProfilePage />} />
                <Route path="/user/pos" element={<UserPOS />} />
                <Route path="/user/dashboard" element={<UserPOS />} />
                <Route path="/user/cart" element={<ShoppingCart />} />
                <Route
                    element={
                        <ProtectedRoute
                            unauthenticatedElement={<Navigate to="/auth/sign-in" replace />}
                        />
                    }
                >
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;