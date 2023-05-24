import React from 'react';
import './PageLayout.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
const PageLayout = () => {
  return (
    <div className="page-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
