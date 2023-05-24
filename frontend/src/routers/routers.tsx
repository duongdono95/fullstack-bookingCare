import { createBrowserRouter, redirect } from 'react-router-dom';
import HomePage from '../components/Pages/HomePage/HomePage';
import LoginPage from '../components/Pages/LoginPage/LoginPage';
import PageLayout from '../components/Layout/PageLayout';
import AdminPage from '../components/Pages/AdminPage/AdminPage';
import { useAppLoggedIn } from '../redux/hook/hook';

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
