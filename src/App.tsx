import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "@/Landing";
import SignInPage from "@/SignIn";
import SignUpPage from "@/SignUp";
import ForgotPasswordPage from "@/ForgotPassword";
import ResetPasswordPage from "@/ResetPassword";
import ProfilePage from "@/Profile";

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;