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
      try {
        const token = localStorage.getItem("accessToken");

        if (token) {
          try {
            const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/auth/me`, {
              headers: { authToken: `${token}` },
            });
            
            // setUser({ info: result.data.data, isAuthenticated: true });
          } catch (error) {
            await refreshToken();
          }
        } else {
          setUser({ info: null, isAuthenticated: false });
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
        setIsInitialized(true);
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (user.info) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (userData) => {
    try {
      setIsLoading(true);
      const result = await axios.post(`${import.meta.env.VITE_API_ROOT}/auth/login`, userData);

      if (result?.data?.data) {
        const { user: userInfo, accessToken, refreshToken } = result.data.data;
        setUser({ info: userInfo, isAuthenticated: true });
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userInfo));
        return true;
      }
      return false;
    } catch (error) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser({ info: null, isAuthenticated: false });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  };

  const refreshToken = async () => {
    const token = localStorage.getItem("refreshToken");

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
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const isAuthenticated = () => {
    return user.isAuthenticated && localStorage.getItem("accessToken");
  };

  const hasPermission = (requiredLevel) => {
    if (!user.info || user.info.emp_level == null) {
      return false;
    }
    const hasPermission = parseInt(user.info.emp_level) <= parseInt(requiredLevel);
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
