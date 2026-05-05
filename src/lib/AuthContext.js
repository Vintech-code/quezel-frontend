import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
const AuthContext = React.createContext(undefined);
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = React.useState(false);
    const [authChecked, setAuthChecked] = React.useState(false);
    const [authError, setAuthError] = React.useState(null);
    const checkUserAuth = React.useCallback(() => {
        setIsLoadingAuth(true);
        // Placeholder auth check to unblock routing until real auth wiring is added.
        Promise.resolve()
            .then(() => {
            setIsAuthenticated(false);
            setAuthError(null);
            setAuthChecked(true);
        })
            .finally(() => setIsLoadingAuth(false));
    }, []);
    const value = React.useMemo(() => ({
        isAuthenticated,
        isLoadingAuth,
        authChecked,
        authError,
        checkUserAuth,
    }), [authChecked, authError, checkUserAuth, isAuthenticated, isLoadingAuth]);
    return _jsx(AuthContext.Provider, { value: value, children: children });
}
export function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
