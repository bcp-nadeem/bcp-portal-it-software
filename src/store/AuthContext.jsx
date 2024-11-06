import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user from localStorage if available
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  // Debug logging function
  const logDebug = (message, data = {}) => {
    console.log(`[Auth Debug] ${message}`, data);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      logDebug('Initializing auth...');
      try {
        const token = localStorage.getItem("refreshToken");
        const storedUser = localStorage.getItem("user");
        
        logDebug('Stored credentials:', { 
          hasToken: !!token, 
          hasStoredUser: !!storedUser 
        });

        if (token) {
          const success = await refreshToken();
          logDebug('Token refresh result:', { success });
          
          if (!success) {
            logDebug('Token refresh failed, logging out');
          }
        } else {
          logDebug('No token found, setting as not authenticated');
          setUser(null);
        }
      } catch (error) {
        logDebug('Auth initialization error:', { error: error.message });
      } finally {
        setIsLoading(false);
        setIsInitialized(true);
        logDebug('Auth initialization complete', { 
          isAuthenticated: !!user,
          user 
        });
      }
    };

    initializeAuth();
  }, []);

  // Store user in localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      logDebug('User state updated', { user });
    } else {
      localStorage.removeItem('user');
      logDebug('User state cleared');
    }
  }, [user]);

  const login = async (userData) => {
    logDebug('Login attempt', { userData });
    try {
      setIsLoading(true);
      const result = await axios.post(
        `${import.meta.env.VITE_API_ROOT}/auth/login`,
        userData
      );

      if (result?.data?.data) {
        const { user: userData, accessToken, refreshToken } = result.data.data;
        setUser(userData);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userData));
        logDebug('Login successful', { userData });
        return true;
      }
      logDebug('Login failed - invalid response data');
      return false;
    } catch (error) {
      logDebug('Login error:', { error: error.message });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    logDebug('Logging out');
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  };

  const refreshToken = async () => {
    const token = localStorage.getItem("refreshToken");
    logDebug('Attempting token refresh', { hasToken: !!token });

    if (!token) {
      return false;
    }

    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_ROOT}/auth/refresh-token`,
        { refreshToken: token }
      );

      if (result?.data?.data) {
        const { user: userData, accessToken, refreshToken } = result.data.data;
        setUser(userData);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userData));
        logDebug('Token refresh successful', { userData });
        return true;
      }
      logDebug('Token refresh failed - invalid response data');
      return false;
    } catch (error) {
      logDebug('Token refresh error:', { error: error.message });
      return false;
    }
  };

  const isAuthenticated = () => {
    const hasUser = Boolean(user);
    const hasToken = Boolean(localStorage.getItem("accessToken"));
    logDebug('Checking authentication', { 
      hasUser, 
      hasToken,
      user
    });
    return hasUser && hasToken;
  };

  const hasPermission = (requiredLevel) => {
    if (!user || !user.emp_level) {
      logDebug('Permission check failed - no user or emp_level', { 
        user, 
        requiredLevel 
      });
      return false;
    }
    const hasPermission = parseInt(user.emp_level) <= parseInt(requiredLevel);
    logDebug('Checking permission', { 
      userLevel: user.emp_level, 
      requiredLevel,
      hasPermission 
    });
    return hasPermission;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        hasPermission,
        refreshToken,
        isLoading,
        isInitialized
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};