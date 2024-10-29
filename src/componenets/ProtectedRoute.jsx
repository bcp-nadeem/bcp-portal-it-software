import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, hasPermission, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  if (requireAdmin && !hasPermission(1)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

export default ProtectedRoute;