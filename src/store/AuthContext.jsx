import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(result.data.data.user);
        } catch (error) {
          // Token might be expired, try to refresh
          try {
            await refreshToken();
          } catch (refreshError) {
            logout();
          }
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (userData) => {
    try {
      const result = await axios.post(`${import.meta.env.VITE_API_ROOT}/auth/login`, userData);
      
      if (result?.data?.data) {
        setUser(result.data.data.user);
        localStorage.setItem('accessToken', result.data.data.accessToken);
        localStorage.setItem('refreshToken', result.data.data.refreshToken);
        return true;
      }
      return false;
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
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const result = await axios.post(`${import.meta.env.VITE_API_ROOT}/auth/refresh-token`, { refreshToken });
      
      if (result?.data?.data) {
        setUser(result.data.data.user);
        localStorage.setItem('accessToken', result.data.data.accessToken);
        localStorage.setItem('refreshToken', result.data.data.refreshToken);
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };

  // Changed to sync function that checks user state directly
  const isAuthenticated = () => Boolean(user);
  
  // Simplified permission check
  const hasPermission = (requiredLevel) => {
    if (!user || !user.emp_level) return false;
    return parseInt(user.emp_level) <= parseInt(requiredLevel);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or your loading component
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated, 
      hasPermission, 
      refreshToken,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};