import React, { useEffect } from 'react';
// import { getAllUsers } from '../../../../../services/userServices';
import { useGetAllUsersQuery } from '../../../../../redux/api/userQuery';
import { User } from '../../../../../utils/types';
const ManagingUsers = () => {
  const { data, error, isLoading } = useGetAllUsersQuery('ALL');
  const users = data?.users;
  console.log(users);
  return (
    <div className="managing-users">
      <div className="tools">
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>
                <i className="fa-solid fa-layer-group"></i>
              </th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Position</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                console.log(user);
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.phonenumber}</td>
                    <td>{user.roleId}</td>
                    <td>{user.positionId}</td>
                    <td>
                      <i className="fa-solid fa-user-pen"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-trash"></i>{' '}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagingUsers;
