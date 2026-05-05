import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@/Landing";
import SignInPage from "@/SignIn";
import SignUpPage from "@/SignUp";
import ForgotPasswordPage from "@/ForgotPassword";
import ResetPasswordPage from "@/ResetPassword";
import ProfilePage from "@/Profile";
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/auth/sign-in", element: _jsx(SignInPage, {}) }), _jsx(Route, { path: "/auth/sign-up", element: _jsx(SignUpPage, {}) }), _jsx(Route, { path: "/auth/forgot-password", element: _jsx(ForgotPasswordPage, {}) }), _jsx(Route, { path: "/auth/reset-password", element: _jsx(ResetPasswordPage, {}) }), _jsx(Route, { path: "/auth/profile", element: _jsx(ProfilePage, {}) })] }) }));
}
export default App;
