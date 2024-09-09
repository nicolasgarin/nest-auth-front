import { create, StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  cookies: Record<string, string>;
  responseMessage: string;
  setAuth: (isAuth: boolean) => void;
  setUser: (userData: User | null) => void;
  setToken: (token: string | null) => void;
  setCookies: (cookies: Record<string, string>) => void;
  setResponseMessage: (message: string) => void;
  logout: () => void;
}

type AuthPersist = (
  config: StateCreator<AuthState>,
  options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

const useAuthStore = create<AuthState>(
  (persist as AuthPersist)(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      cookies: {},
      responseMessage: '',
      
      setAuth: (isAuth: boolean ) => set({ isAuthenticated: isAuth }),
      setUser: (userData ) => set({ user: userData }),
      setToken: (token ) => set({ token }),
      setCookies: (cookies: Record<string, string> ) => set({ cookies }),
      setResponseMessage: (message: string) => set({ responseMessage: message }),
      
      logout: () => set({
        isAuthenticated: false,
        user: null,
        token: null,
        cookies: {},
        responseMessage: '',
      }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
)

export default useAuthStore