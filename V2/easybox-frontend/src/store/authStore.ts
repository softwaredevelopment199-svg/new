
import { create } from 'zustand'
import { User } from '@/types'

interface AuthStore {
  user: User | null
  token: string | null
  isLoading: boolean
  isAuthenticated: boolean
  setUser: (user: User) => void
  setToken: (token: string) => void
  login: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: localStorage.getItem('authToken'),
  isLoading: false,
  isAuthenticated: !!localStorage.getItem('authToken'),
  
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  
  login: (user, token) => {
    localStorage.setItem('authToken', token)
    set({ user, token, isAuthenticated: true })
  },
  
  logout: () => {
    localStorage.removeItem('authToken')
    set({ user: null, token: null, isAuthenticated: false })
  },
}))
