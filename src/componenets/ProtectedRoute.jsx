// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, hasPermission } = useAuth();

  // if (!isAuthenticated()) {
  //   return <Navigate to="/" replace />; // Redirect to login if not authenticated
  // }

  // if (requireAdmin && !hasPermission(7)) {
  //   return alert('You do not have permission to access this page');
  // }
  return children;
};

export default ProtectedRoute;
