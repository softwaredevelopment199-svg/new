import { create } from 'zustand';
export const useAuthStore = create((set) => ({
    user: null,
    token: localStorage.getItem('authToken'),
    isLoading: false,
    isAuthenticated: !!localStorage.getItem('authToken'),
    setUser: (user) => set({ user }),
    setToken: (token) => set({ token }),
    login: (user, token) => {
        localStorage.setItem('authToken', token);
        set({ user, token, isAuthenticated: true });
    },
    logout: () => {
        localStorage.removeItem('authToken');
        set({ user: null, token: null, isAuthenticated: false });
    },
}));
