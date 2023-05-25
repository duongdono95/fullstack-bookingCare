import React, { useState, Fragment } from 'react';
// import { getAllUsers } from '../../../../../services/userServices';
import { useGetAllUsersQuery } from '../../../../../redux/api/userQuery';
import './ManagingUsers.scss';
import ManagingUserModal from '../Modal/ManagingUserModal';

const ManagingUsers = () => {
  const { data, error, isLoading } = useGetAllUsersQuery('ALL');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const users = data?.users;
  console.log(users);
  const handleOpenModal = (modalTitle: string) => {
    setIsOpenModal(true);
    setModalType(modalTitle);
  };
  console.log(isOpenModal);
  return (
    <Fragment>
      {isOpenModal && <ManagingUserModal modalTitle={modalType} />}
      <div className="managing-users">
        <h1>List of Users</h1>
        <div className="content">
          <table>
            <thead>
              <tr>
                <td colSpan={10} className="add-icon">
                  <i
                    className="fa-solid fa-circle-plus"
                    onClick={() => handleOpenModal('create')}
                  ></i>
                </td>
              </tr>
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
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.phonenumber}</td>
                      <td>{user.roleId}</td>
                      <td>{user.positionId}</td>
                      <td>
                        <i
                          className="fa-solid fa-user-pen"
                          onClick={() => handleOpenModal('edit')}
                        ></i>
                      </td>
                      <td>
                        <i className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ManagingUsers;
