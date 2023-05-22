import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import PageLayout from '../Pages/Layout/PageLayout';
import AdminPage from '../Pages/system/AdminPage/AdminPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/system',
    children: [
      {
        path: '/system/admin',
        element: <AdminPage />,
      },
    ],
  },
]);
