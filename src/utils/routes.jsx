// src/router/index.js (or wherever your router configuration is)
import { createBrowserRouter } from "react-router-dom";
import Layout from "../componenets/Layout.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import SoftwareGrid from "../pages/SoftwareGrid.jsx";
import SoftwareDetails from "../pages/SoftwareDetails.jsx";
import SoftwareList from "../pages/SoftwareList.jsx";
import CategoryList from "../pages/CategoryList.jsx";
import UserProfile from "../pages/UserProfile.jsx";
import ProtectedRoute from "../componenets/ProtectedRoute.jsx";
import EmailNotification from "../pages/EmailNotification.jsx";

// Declare the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "about",
            element: <div>About</div>,
          },
        ],
      },
      {
        path: "/software",
        element: (
          <ProtectedRoute >
            <SoftwareGrid />
          </ProtectedRoute>
        ), 
      },
      {
        path: "/software-details/:softwareId",
        element: (
          <ProtectedRoute >
            <SoftwareDetails />
          </ProtectedRoute>
        ), 
      },
      {
        path: "software-list",
        element: (
          <ProtectedRoute requiredLevel="1">
            <SoftwareList />
          </ProtectedRoute>
        ), // Only accessible to admins
      },
      {
        path: "/category-list",
        element: (
          <ProtectedRoute requiredLevel="1">
            <CategoryList />
          </ProtectedRoute>
        ), // Only accessible to admins
      },
      {
        path: "/user-profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/email-notification",
        element: (
          <ProtectedRoute requiredLevel="1">
            <EmailNotification />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

// Export the router
export default router;
