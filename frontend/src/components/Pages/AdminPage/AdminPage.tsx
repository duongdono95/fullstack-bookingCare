import React from 'react';
import AdminNavigator from '../../Layout/components/Navigator/AdminNavigator';
import { adminMenu, doctorMenu } from '../../Layout/components/Navigator/navigatorMenu';
const AdminPage = () => {
  return (
    <div className="admin-page">
      <AdminNavigator menu={adminMenu} />
    </div>
  );
};

export default AdminPage;
