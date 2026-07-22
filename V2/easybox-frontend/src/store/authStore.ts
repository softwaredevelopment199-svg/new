import { create } from 'zustand'
import { persist, PersistStorage } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
  firstName?: string
  role: string
}

interface AuthStore {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User) => void
  setToken: (token: string) => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        try {
          // Mock login - replace with API call
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/auth/login`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
            }
          )

          if (!response.ok) throw new Error('Login failed')

          const { user, token } = await response.json()
          set({ user, token, isAuthenticated: true })
        } catch (error) {
          console.error('Login error:', error)
          throw error
        }
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false })
      },

      setUser: (user: User) => {
        set({ user })
      },

      setToken: (token: string) => {
        set({ token, isAuthenticated: !!token })
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)
