import React, { useState, Fragment, useEffect } from 'react';
// import { getAllUsers } from '../../../../../services/userServices';
import './ManagingUsers.scss';
import ManagingUserModal from '../Modal/ManagingUserModal';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteUser, getUsers } from '../../../../../services/userServices';
import { User } from '../../../../../utils/types';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';

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
  const deleteUserMutation = useMutation({
    mutationFn: async (userId: string | number) => {
      const response = await deleteUser(userId);
      // return response;
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      } else {
        toast.success('Delete User Successfully');
        usersQuery.refetch();
      }
      return;
    },
  });

  const handleDeleteRequest = (userId: string | number) => {
    deleteUserMutation.mutate(userId);
    console.log(deleteUserMutation);
  };
  return (
    <Fragment>
      {isOpenModal && (
        <ManagingUserModal
          modalTitle={modalType}
          setIsOpenModal={setIsOpenModal}
          editUserDetail={editUserDetail as User}
          usersQuery={usersQuery}
        />
      )}
      <div className="managing-users">
        <h1>
          <FormattedMessage id="menu.admin.list-of-users" />
        </h1>
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
                <th>
                  <FormattedMessage id="manage-user.first-name" />
                </th>
                <th>
                  <FormattedMessage id="manage-user.last-name" />
                </th>
                <th>
                  <FormattedMessage id="manage-user.email" />
                </th>
                <th>
                  <FormattedMessage id="manage-user.address" />
                </th>
                <th>
                  <FormattedMessage id="manage-user.phone-number" />
                </th>
                <th>
                  <FormattedMessage id="manage-user.role" />
                </th>
                <th>
                  <FormattedMessage id="manage-user.position" />
                </th>
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
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => handleDeleteRequest(user.id as number)}
                        ></i>
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
