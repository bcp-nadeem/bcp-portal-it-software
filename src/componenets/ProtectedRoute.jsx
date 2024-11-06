import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { Loader2 } from "lucide-react";

const LoadingSpinner = ({ message }) => (
  <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-white">
    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
    <p className="text-gray-600 text-lg">{message}</p>
  </div>
);

const ProtectedRoute = ({ children, requiredLevel = 10, redirectTo = '/' }) => {
  const { isAuthenticated, hasPermission, isLoading, user } = useAuth();
  const location = useLocation();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState({ redirect: false, to: redirectTo });

  console.log('[ProtectedRoute Debug]', {
    isLoading,
    isAuthenticated: isAuthenticated(),
    user,
    requiredLevel,
    currentPath: location.pathname
  });

  useEffect(() => {
    const checkAuthorization = () => {
      setIsAuthorized(false); // Reset authorization status initially

      if (isLoading) return; // If still loading, skip checks

      if (!isAuthenticated()) {
        console.log('[ProtectedRoute] Not authenticated, redirecting to login');
        setShouldRedirect({ redirect: true, to: "/" });
        return;
      }

      if (!user?.info) {
        console.warn('User info is missing');
        setShouldRedirect({ redirect: true, to: "/" });
        return;
      }

      const userLevel = parseInt(user.info.emp_level || 0);
      if (userLevel > requiredLevel) {
        console.log(`Access denied: User level (${userLevel}) is above required level (${requiredLevel})`);
        setShouldRedirect({ redirect: true, to: "/dashboard" });
        return;
      }

      setIsAuthorized(true); // All checks passed
    };

    checkAuthorization();
  }, [user, isLoading, requiredLevel, redirectTo, isAuthenticated]);

  if (!isAuthorized) {
    if (shouldRedirect.redirect) {
      return <Navigate to={shouldRedirect.to} state={{ from: location.pathname }} replace />;
    }

    return (
      <div className="fixed inset-0 z-50">
        <LoadingSpinner message={isLoading ? "Fetching Data..." : "Authenticating..."} />
      </div>
    );
  }

  console.log('[ProtectedRoute] Access granted');
  return children;
};

export default ProtectedRoute;
