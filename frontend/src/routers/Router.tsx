import React from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
import PageLayout from '../components/Layout/PageLayout';
import LoginPage from '../components/Pages/LoginPage/LoginPage';
import HomePage from '../components/Pages/HomePage/HomePage';
import DoctorDetailPage from '../components/Pages/DoctorDetailPage/DoctorDetailPage';

const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<PageLayout />}>
        <Route path={'/'} element={<HomePage />} />
        <Route path={':doctorId'} element={<DoctorDetailPage />} />
      </Route>
      <Route path={'/login'} element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
