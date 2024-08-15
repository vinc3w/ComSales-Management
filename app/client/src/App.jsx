import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import AuthGuard from './Components/AuthGuard';

import Error from './Pages/Misc/Error/Error';

import Login from './Pages/Auth/Login/Login';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword';

import Dashboard from './Pages/All/Dashboard/Dashboard';
import AllCases from './Pages/All/AllCases/AllCases';

import Profile from './Pages/App/Profile/Profile';
import CreateCase from './Pages/App/CreateCase/CreateCase';
import Notification from './Pages/App/Notification/Notification';
import Help from './Pages/App/Help/Help';

import AllEmployee from './Pages/Admin/AllEmployee/AllEmployee';
import Employee from './Pages/Admin/Employee/Employee';

import './styles/index.css';

const router = createBrowserRouter([

  {
    path: '/',
    element: <AuthGuard />,
    errorElement: <Error />
  },
  {
    path: '/error',
    element: <Error />,
  },

  {
    path: '/login',
    element: <AuthGuard><Login /></AuthGuard>
  },
  {
    path: '/forgot-password',
    element: <AuthGuard><ForgotPassword /></AuthGuard>
  },
  {
    path: '/reset-password',
    element: <AuthGuard><ResetPassword /></AuthGuard>
  },

  {
    path: '/help',
    element: <AuthGuard><Help /></AuthGuard>
  },
  {
    path: '/dashboard',
    element: <AuthGuard><Dashboard /></AuthGuard>
  },
  {
    path: '/profile',
    element: <AuthGuard><Profile /></AuthGuard>
  },
  {
    path: '/notification',
    element: <AuthGuard><Notification /></AuthGuard>
  },
  {
    path: '/notification/:page',
    element: <AuthGuard><Notification /></AuthGuard>
  },
  {
    path: '/case/page/:page',
    element: <AuthGuard><AllCases /></AuthGuard>
  },
  {
    path: '/case/all',
    element: <AuthGuard><AllCases /></AuthGuard>
  },
  {
    path: '/case',
    element: <AuthGuard><CreateCase /></AuthGuard>
  },
  {
    path: '/case/:caseNo',
    element: <AuthGuard><CreateCase /></AuthGuard>
  },
  {
    path: '/case/create',
    element: <AuthGuard><CreateCase /></AuthGuard>
  },
  {
    path: '/case/create/:caseNo',
    element: <AuthGuard><CreateCase /></AuthGuard>
  },
  {
    path: '/case/create/:caseNo/:formType',
    element: <AuthGuard><CreateCase /></AuthGuard>
  },
  
  
  {
    path: '/admin',
    element: <AuthGuard><Dashboard isAdmin={true} /></AuthGuard>
  },
  {
    path: '/admin/dashboard',
    element: <AuthGuard><Dashboard isAdmin={true} /></AuthGuard>
  },
  {
    path: '/admin/case',
    element: <AuthGuard><AllCases isAdmin={true} /></AuthGuard>
  },
  {
    path: '/admin/case/:page',
    element: <AuthGuard><AllCases isAdmin={true} /></AuthGuard>
  },
  {
    path: '/admin/employee',
    element: <AuthGuard><AllEmployee /></AuthGuard>
  },
  {
    path: '/admin/employee/all',
    element: <AuthGuard><AllEmployee /></AuthGuard>
  },
  {
    path: '/admin/employee/all/:page',
    element: <AuthGuard><AllEmployee /></AuthGuard>
  },
  {
    path: '/admin/employee/:userId',
    element: <AuthGuard><Employee /></AuthGuard>
  }

]);

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App;
