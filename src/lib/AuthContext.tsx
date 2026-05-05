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
  checkUserAuth: () => void
}

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = React.useState(false)
  const [authChecked, setAuthChecked] = React.useState(false)
  const [authError, setAuthError] = React.useState<AuthError>(null)

  const checkUserAuth = React.useCallback(() => {
    setIsLoadingAuth(true)

    // Placeholder auth check to unblock routing until real auth wiring is added.
    Promise.resolve()
      .then(() => {
        setIsAuthenticated(false)
        setAuthError(null)
        setAuthChecked(true)
      })
      .finally(() => setIsLoadingAuth(false))
  }, [])

  const value = React.useMemo(
    () => ({
      isAuthenticated,
      isLoadingAuth,
      authChecked,
      authError,
      checkUserAuth,
    }),
    [authChecked, authError, checkUserAuth, isAuthenticated, isLoadingAuth]
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
