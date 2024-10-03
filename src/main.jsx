import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import LoginPage from './components/authentication/LoginPage.jsx'
import Dashboard from './components/admin/Dashboard.jsx'
import Software from './components/admin/Software.jsx'
import Category from './components/admin/Category.jsx'
import Notification from './components/admin/Notification.jsx'
import Settings from './components/admin/Settings.jsx'
import SoftwareDetailPage from './components/admin/SoftwareDetailPage.jsx'
import UserProfile from './components/admin/UserProfile.jsx'
import UserProfileList from './components/admin/UserProfileList.jsx'
import SoftwareGrid from './components/users/SoftwareGrid.jsx'
import SoftwareDetailsPage from './components/users/SoftwareDetailsPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<LoginPage />} />

      {/* Admin Routers */}
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/software' element={<Software />} />
      <Route path='/category' element={<Category />} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/software-details/:softwareId' element={<SoftwareDetailPage />} />
      <Route path='/user-profile/:userId' element={<UserProfile />} />
      <Route path='/user-profile-list' element={<UserProfileList />} />

      {/* User Routers */}

      <Route path='/software-grid' element={<SoftwareGrid />} />
      <Route path='/software-details-page/:softwareId' element={<SoftwareDetailsPage />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
