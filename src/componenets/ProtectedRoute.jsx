// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, hasPermission } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/" replace />; // Redirect to login if not authenticated
  }

  if (requireAdmin && !hasPermission(1)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
