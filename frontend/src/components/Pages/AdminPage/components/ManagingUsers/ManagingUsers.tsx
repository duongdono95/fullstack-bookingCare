import React, { useState, Fragment } from 'react';
// import { getAllUsers } from '../../../../../services/userServices';
import './ManagingUsers.scss';
import ManagingUserModal from '../Modal/ManagingUserModal';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers } from '../../../../../services/userServices';
import { User } from '../../../../../utils/types';

const ManagingUsers = () => {
  const queryClient = useQueryClient();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editUserDetail, setEditUserDetail] = useState<User | undefined>();
  const handleOpenModal = (modalTitle: string, user?: User) => {
    setIsOpenModal(true);
    setModalType(modalTitle);
    setEditUserDetail(user);
  };

  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers('ALL'),
  });
  return (
    <Fragment>
      {isOpenModal && (
        <ManagingUserModal
          modalTitle={modalType}
          setIsOpenModal={setIsOpenModal}
          editUserDetail={editUserDetail as User}
        />
      )}
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
              {usersQuery.data?.users &&
                usersQuery.data?.users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.roleId}</td>
                      <td>{user.positionId}</td>
                      <td>
                        <i
                          className="fa-solid fa-user-pen"
                          onClick={() => handleOpenModal('edit', user)}
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
          {usersQuery.data?.errCode !== 0 && <p>Users not found!</p>}
        </div>
      </div>
    </Fragment>
  );
};

export default ManagingUsers;
