import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/Pages/HomePage/HomePage';
import LoginPage from '../components/Pages/LoginPage/LoginPage';
import PageLayout from '../components/Layout/PageLayout';
import AdminPage from '../components/Pages/AdminPage/AdminPage';

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
    element: <AdminPage />,
  },
]);
