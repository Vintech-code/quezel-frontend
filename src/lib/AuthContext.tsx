import React from "react"

type AuthError = {
  type: string
  message?: string
} | null

type AuthContextValue = {
  isAuthenticated: boolean
  isLoadingAuth: boolean
  authChecked: boolean
  authError: AuthError
  userRole: "admin" | "user" | null
  checkUserAuth: () => void
  signIn: (email: string, password: string) => "admin" | "user" | null
  signOut: () => void
}

const ADMIN_EMAIL = "admin@quezel.com"
const ADMIN_PASSWORD = "QuezelAdmin2025"
const USER_EMAIL = "clark@gmail.com"
const USER_PASSWORD = "123456789"
const AUTH_STORAGE_KEY = "quezel_auth_role"

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = React.useState(false)
  const [authChecked, setAuthChecked] = React.useState(false)
  const [authError, setAuthError] = React.useState<AuthError>(null)
  const [userRole, setUserRole] = React.useState<"admin" | "user" | null>(null)

  const checkUserAuth = React.useCallback(() => {
    setIsLoadingAuth(true)

    // Placeholder auth check to unblock routing until real auth wiring is added.
    Promise.resolve()
      .then(() => {
        const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY)
        const isValidRole = storedAuth === "admin" || storedAuth === "user"
        setIsAuthenticated(isValidRole)
        setUserRole(isValidRole ? (storedAuth as "admin" | "user") : null)
        setAuthError(null)
        setAuthChecked(true)
      })
      .finally(() => setIsLoadingAuth(false))
  }, [])

  const signIn = React.useCallback(
    (email: string, password: string) => {
      const normalizedEmail = email.trim().toLowerCase()
      const isAdmin = normalizedEmail === ADMIN_EMAIL && password === ADMIN_PASSWORD
      const isUser = normalizedEmail === USER_EMAIL && password === USER_PASSWORD

      let role: "admin" | "user" | null = null

      if (isAdmin) {
        role = "admin"
      } else if (isUser) {
        role = "user"
      }

      if (role) {
        localStorage.setItem(AUTH_STORAGE_KEY, role)
        setIsAuthenticated(true)
        setUserRole(role)
        setAuthError(null)
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY)
        setIsAuthenticated(false)
        setUserRole(null)
        setAuthError({ type: "invalid_credentials", message: "Invalid email or password." })
      }

      setAuthChecked(true)
      return role
    },
    []
  )

  const signOut = React.useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setIsAuthenticated(false)
    setUserRole(null)
    setAuthError(null)
    setAuthChecked(true)
  }, [])

  const value = React.useMemo(
    () => ({
      isAuthenticated,
      isLoadingAuth,
      authChecked,
      authError,
      userRole,
      checkUserAuth,
      signIn,
      signOut,
    }),
    [
      authChecked,
      authError,
      checkUserAuth,
      isAuthenticated,
      isLoadingAuth,
      signIn,
      signOut,
      userRole,
    ]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
