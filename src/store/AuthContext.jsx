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
        console.log(result);
        
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
        console.log(result);
        
        setUser(result.data.data.user);
        localStorage.setItem('accessToken', result.data.data.accessToken);
        localStorage.setItem('refreshToken', result.data.data.refreshToken);
        return true;
      }
      
    } catch (error) {
      throw error;
    }
  };

  const isAuthenticated = async() => await user?.emp_level ; // Check if user is logged in
  const hasPermission = (role) => parseInt(user?.emp_level) <= parseInt(role);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, hasPermission, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
