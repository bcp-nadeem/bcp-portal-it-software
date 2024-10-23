import { createBrowserRouter } from "react-router-dom";
import Layout from "../componenets/Layout.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import SoftwareGrid from "../pages/SoftwareGrid.jsx";
import SoftwareDetails from "../pages/SoftwareDetails.jsx";
import SoftwareList from "../pages/SoftwareList.jsx";
import CategoryList from "../pages/CategoryList.jsx";
import UserProfile from "../pages/UserProfile.jsx";

// Declare the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LoginPage />
      },
      {
        path: "/dashboard",
        children : [
          {
            path : "",
            element: <Dashboard />,
          },
          {
            path : "about",
            element: <div>About</div>,
          }
        ]
      },
      {
        path : "/software",
        element: <SoftwareGrid />,
      },
      {
        path : "/software-details/:softwareId",
        element: <SoftwareDetails />,
      },
      {
        path : "/software-list",
        element: <SoftwareList />,
      },
      {
        path : "/category-list",
        element: <CategoryList />,
      },
      {
        path : "/user-profile",
        element: <UserProfile />,
      }
    ]
  }
]);

// Export the router
export default router;
