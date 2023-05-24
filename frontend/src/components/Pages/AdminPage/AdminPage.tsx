import React from 'react';
import AdminNavigator from '../../Layout/components/Navigator/AdminNavigator';
import {
  adminMenu,
  doctorMenu,
} from '../../Layout/components/Navigator/navigatorMenu';
import './AdminPage.scss';
import { Outlet } from 'react-router-dom';
const AdminPage = () => {
  return (
    <div className="admin-page">
      <div className="admin-page--header">
        <AdminNavigator menu={adminMenu} />
      </div>
      <div className="admin-page--content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
