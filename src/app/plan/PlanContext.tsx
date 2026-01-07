'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the plan data
export interface PlanData {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  preferences?: string;
}

interface PlanContextType {
  plan: PlanData | null;
  setPlan: (plan: PlanData) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
};

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<PlanData | null>(null);
  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

// Auth context for demo login/logout
interface User {
  name: string;
  email: string;
  image?: string; // optional profile image
}
interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const login = (user: User) => {
    setUser(user);
    setIsLoggedIn(true);
  };
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};