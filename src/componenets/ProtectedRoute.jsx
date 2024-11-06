<<<<<<< HEAD
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, hasPermission, isLoading, user } = useAuth();
  const location = useLocation();

  console.log('[ProtectedRoute Debug]', {
    isLoading,
    isAuthenticated: isAuthenticated(),
    user,
    requireAdmin,
    currentPath: location.pathname
  });

  if (isLoading) {
    console.log('[ProtectedRoute] Still loading...');
    return <div>Loading...</div>;
  }

  if (!isAuthenticated()) {
    console.log('[ProtectedRoute] Not authenticated, redirecting to login');
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  if (requireAdmin && !hasPermission(1)) {
    console.log('[ProtectedRoute] Insufficient permissions, redirecting to dashboard');
    return <Navigate to="/dashboard" replace />;
  }

  console.log('[ProtectedRoute] Access granted');
=======
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { Loader2 } from "lucide-react";

const LoadingSpinner = ({ message }) => (
  <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-white">
    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
    <p className="text-gray-600 text-lg">{message}</p>
  </div>
);

const ProtectedRoute = ({ children, requiredLevel = 10, redirectTo = '/' }) => {
  const { user, isLoading } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState({ redirect: false, to: redirectTo });

  useEffect(() => {
    const checkAuthorization = () => {
      // Reset authorization when checks start
      setIsAuthorized(false);

      // Still loading auth state
      if (isLoading || !user) {
        return;
      }

      // Check authentication
      if (!user.isAuthenticated) {
        setShouldRedirect({ redirect: true, to: redirectTo });
        return;
      }

      // Check if user.info exists
      if (!user.info) {
        console.warn('User info is missing');
        setShouldRedirect({ redirect: true, to: redirectTo });
        return;
      }

      // Parse levels with fallback to 0
      const userLevel = parseInt(user.info.emp_level || 0);
      const requiredLevelNum = parseInt(requiredLevel || 0);

      // Check authorization level
      if (userLevel > requiredLevelNum) {
        console.log(`Access denied: User level (${userLevel}) is above required level (${requiredLevelNum})`);
        setShouldRedirect({ redirect: true, to: "/dashboard" });
        return;
      }

      // All checks passed
      setIsAuthorized(true);
    };

    checkAuthorization();
  }, [user, isLoading, redirectTo, requiredLevel]);

  // Always show loading until we're sure about authorization
  if (!isAuthorized) {
    // If we need to redirect, do it immediately
    if (shouldRedirect.redirect) {
      return <Navigate to={shouldRedirect.to} replace />;
    }
    // Otherwise show loading
    return (
      <div className="fixed inset-0 z-50">
        <LoadingSpinner 
          message={isLoading ? "Fetching Data..." : "Authenticating..."} 
        />
      </div>
    );
  }

  // Only render children if explicitly authorized
>>>>>>> d12897c7a0eef0f6d9f136daa590b1e355ca698f
  return children;
};

export default ProtectedRoute;