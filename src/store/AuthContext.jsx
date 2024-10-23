// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // This should come from an actual authentication mechanism

  const login = async (userData) => {
    try {
      const result = await axios.post(`${import.meta.env.VITE_API_ROOT}/auth/login`, userData);
  
      if (result) {
        setUser(result.data.data.user);
        localStorage.setItem('accessToken', result.data.data.accessToken);
        localStorage.setItem('refreshToken', result.data.data.refreshToken);
        return true;
      }
      
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      const result = await axios.post(`${import.meta.env.VITE_API_ROOT}/auth/refresh-token`, { refreshToken });
  
      if (result) {
        setUser(result.data.data.user);
        localStorage.setItem('accessToken', result.data.data.accessToken);
        localStorage.setItem('refreshToken', result.data.data.refreshToken);
        return true;
      }
      
    } catch (error) {
      throw error;
    }
  };

  const isAuthenticated = () => user; // Check if user is logged in
  const hasPermission = (role) => user?.emp_level <= role; // Check if user has a specific role

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, hasPermission, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
