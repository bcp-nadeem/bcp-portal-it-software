import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import routes from './utils/routes.jsx';
import { AuthProvider } from './store/AuthContext.jsx';

function App() {
  return (
    //browser router
    <AuthProvider>
    <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App
