import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { api } from '../api/axios';

// ── Types ────────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: string;
  email: string;
  rank: string;
  loyaltyPoints: number;
}

interface RegisterPayload {
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: AuthUser;
}

interface RegisterResponse {
  message: string;
  requiresOtp?: boolean;
  email?: string;
}

interface LoginResponse {
  message: string;
  token?: string;
  user?: AuthUser;
  requiresOtp?: boolean;
  email?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<LoginResponse>;
  register: (payload: RegisterPayload) => Promise<RegisterResponse>;
  verifyOtp: (email: string, otp: string) => Promise<void>;
  resendOtp: (email: string) => Promise<void>;
  googleLogin: (credential: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

// ── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'obs_token';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // On mount, restore session from localStorage by fetching the profile
  const refreshUser = useCallback(async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setIsLoading(false);
      return;
    }
    try {
      const data = await api.get<{ user: AuthUser }>('/api/users/profile');
      setUser(data.user);
    } catch {
      // Token is invalid or expired — clear it
      localStorage.removeItem(TOKEN_KEY);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    try {
      const data = await api.post<LoginResponse>('/api/auth/login', payload);
      if (data.token && data.user) {
        localStorage.setItem(TOKEN_KEY, data.token);
        setUser(data.user);
      }
      return data;
    } catch (err: any) {
      // Axios error handling to capture the 403 unverified state
      if (err.response?.status === 403 && err.response?.data?.requiresOtp) {
        return err.response.data;
      }
      throw err;
    }
  };

  const register = async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const data = await api.post<RegisterResponse>('/api/auth/register', payload);
    // Do NOT set token here, user is unverified.
    return data;
  };

  const verifyOtp = async (email: string, otp: string): Promise<void> => {
    const data = await api.post<AuthResponse>('/api/auth/verify-otp', { email, otp });
    localStorage.setItem(TOKEN_KEY, data.token);
    setUser(data.user);
  };

  const resendOtp = async (email: string): Promise<void> => {
    await api.post('/api/auth/resend-otp', { email });
  };

  const googleLogin = async (credential: string): Promise<void> => {
    const data = await api.post<AuthResponse>('/api/auth/google', { credential });
    localStorage.setItem(TOKEN_KEY, data.token);
    setUser(data.user);
  };

  const logout = (): void => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        isLoading,
        login,
        register,
        verifyOtp,
        resendOtp,
        googleLogin,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ── Hook ─────────────────────────────────────────────────────────────────────

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
