import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { info: null, isAuthenticated: false };
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const logDebug = (message, data = {}) => {
    console.log(`[Auth Debug] ${message}`, data);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      logDebug("Initializing auth...");
      try {
        const token = localStorage.getItem("accessToken");

        if (token) {
          try {
            const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/auth/me`, {
              headers: { authToken: `${token}` },
            });
            setUser({ info: result.data.data, isAuthenticated: true });
            logDebug("User authenticated from token", { user: result.data.data });
          } catch (error) {
            logDebug("Token validation failed, trying to refresh token");
            await refreshToken();
          }
        } else {
          logDebug("No token found, setting as not authenticated");
          setUser({ info: null, isAuthenticated: false });
        }
      } catch (error) {
        logDebug("Auth initialization error:", { error: error.message });
      } finally {
        setIsLoading(false);
        setIsInitialized(true);
        logDebug("Auth initialization complete", { isAuthenticated: !!user.isAuthenticated, user });
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (user.info) {
      localStorage.setItem("user", JSON.stringify(user));
      logDebug("User state updated", { user });
    } else {
      localStorage.removeItem("user");
      logDebug("User state cleared");
    }
  }, [user]);

  const login = async (userData) => {
    logDebug("Login attempt", { userData });
    try {
      setIsLoading(true);
      const result = await axios.post(`${import.meta.env.VITE_API_ROOT}/auth/login`, userData);

      if (result?.data?.data) {
        const { user: userInfo, accessToken, refreshToken } = result.data.data;
        setUser({ info: userInfo, isAuthenticated: true });
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userInfo));
        logDebug("Login successful", { userInfo });
        return true;
      }
      logDebug("Login failed - invalid response data");
      return false;
    } catch (error) {
      logDebug("Login error:", { error: error.message });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    logDebug("Logging out");
    setUser({ info: null, isAuthenticated: false });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  };

  const refreshToken = async () => {
    const token = localStorage.getItem("refreshToken");
    logDebug("Attempting token refresh", { hasToken: !!token });

    if (!token) {
      return false;
    }

    try {
      const result = await axios.post(`${import.meta.env.VITE_API_ROOT}/auth/refresh-token`, { refreshToken: token });

      if (result?.data?.data) {
        const { user: userInfo, accessToken, refreshToken } = result.data.data;
        setUser({ info: userInfo, isAuthenticated: true });
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userInfo));
        logDebug("Token refresh successful", { userInfo });
        return true;
      }
      logDebug("Token refresh failed - invalid response data");
      return false;
    } catch (error) {
      logDebug("Token refresh error:", { error: error.message });
      return false;
    }
  };

  const isAuthenticated = () => {
    return user.isAuthenticated && localStorage.getItem("accessToken");
  };

  const hasPermission = (requiredLevel) => {
    if (!user.info || user.info.emp_level == null) {
      logDebug("Permission check failed - no user or emp_level", { user, requiredLevel });
      return false;
    }
    const hasPermission = parseInt(user.info.emp_level) <= parseInt(requiredLevel);
    logDebug("Checking permission", { userLevel: user.info.emp_level, requiredLevel, hasPermission });
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
        isInitialized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
