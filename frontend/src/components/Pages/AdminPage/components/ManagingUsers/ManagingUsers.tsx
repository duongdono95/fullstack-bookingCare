import React, { useEffect } from 'react';
import { getAllUsers } from '../../../../../services/userServices';
import { useGetAllUsersQuery } from '../../../../../redux/api/userQuery';

const ManagingUsers = () => {
  const { data, error, isLoading } = useGetAllUsersQuery('ALL');
  console.log(data);
  return (
    <div className="managing-users">
      <div className="tools">
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Position</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagingUsers;
