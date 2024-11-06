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
  return children;
};

export default ProtectedRoute;