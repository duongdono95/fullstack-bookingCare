import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from '../components/Layout/PageLayout';
import LoginPage from '../components/Pages/LoginPage/LoginPage';
import HomePage from '../components/Pages/HomePage/HomePage';
import DoctorDetailPage from '../components/Pages/DoctorDetailPage/DoctorDetailPage';
import AdminPage from '../components/Pages/AdminPage/AdminPage';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const AppRouter = () => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<PageLayout />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={':doctorId'} element={<DoctorDetailPage />} />
        </Route>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/system'} element={isLoggedIn ? <AdminPage /> : <LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
