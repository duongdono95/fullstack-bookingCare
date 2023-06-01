import { UseQueryResult, useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { createUser, editUser } from '../../../../../services/userServices';
import { initialInputForm } from '../../../../../utils/constants';
import { User, responseFetchedUser } from '../../../../../utils/types';
import './ManagingUserModal.scss';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';
import { FilterCodeArray, useSelectorLanguage } from '../../../../../redux/handyHelper';

interface Props {
  modalTitle: string;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  editUserDetail?: User;
  usersQuery: UseQueryResult<responseFetchedUser, unknown>;
}

const ManagingUserModal: React.FC<Props> = ({
  modalTitle,
  setIsOpenModal,
  editUserDetail,
  usersQuery,
}) => {
  const queryClient = useQueryClient();
  const [userDetails, setUserDetails] = useState<User>(
    editUserDetail ? editUserDetail : initialInputForm,
  );
  const language = useSelectorLanguage();
  const genderArray = FilterCodeArray('gender');
  const roleArray = FilterCodeArray('role');
  const positionArray = FilterCodeArray('position');
  console.log(genderArray);
  // access to the mutation
  const addUserMutation = useMutation({
    mutationFn: async (userDetail: User) => {
      const response = await createUser(userDetail);
      // return response;
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      } else {
        toast.success('Create New User Successfully');
        setIsOpenModal(false);
        usersQuery.refetch();
      }
      console.log(response);
      return;
    },
  });
  const editUserMutation = useMutation({
    mutationFn: async (userDetail: User) => {
      const response = await editUser(userDetail);
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      } else {
        toast.success('Edit User Successfully');
        setIsOpenModal(false);
        usersQuery.refetch();
      }
      return;
    },
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call the mutation
    if (modalTitle === 'create') {
      addUserMutation.mutate(userDetails);
    } else {
      editUserMutation.mutate(userDetails);
    }
  };
  console.log(genderArray);
  return (
    <div className="create-new-user">
      <h1>
        {modalTitle === 'create' ? (
          <FormattedMessage id="manage-user.add" />
        ) : (
          <FormattedMessage id="manage-user.edit-user" />
        )}
      </h1>
      <form action="" className="form--container" onSubmit={(e) => handleSubmitUser(e)}>
        <div className="close-btn" onClick={() => setIsOpenModal(false)}>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FormattedMessage id="manage-user.email" />
          </label>
          <input
            required
            name="email"
            type="email"
            id="email"
            onChange={(e) => handleOnChange(e)}
            value={userDetails.email}
            disabled={modalTitle === 'edit' ? true : false}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FormattedMessage id="manage-user.password" />
          </label>
          <input
            required
            name="password"
            type="password"
            id="password"
            onChange={(e) => handleOnChange(e)}
            value={userDetails.password}
            disabled={modalTitle === 'edit' ? true : false}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="firstName">
            <FormattedMessage id="manage-user.first-name" />
          </label>
          <input
            required
            name="firstName"
            type="text"
            id="firstName"
            onChange={(e) => handleOnChange(e)}
            value={userDetails.firstName}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="lastName">
            <FormattedMessage id="manage-user.last-name" />
          </label>
          <input
            required
            name="lastName"
            type="text"
            id="lastName"
            onChange={(e) => handleOnChange(e)}
            value={userDetails.lastName}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="address">
            <FormattedMessage id="manage-user.address" />
          </label>
          <input
            required
            name="address"
            type="text"
            id="address"
            onChange={(e) => handleOnChange(e)}
            value={userDetails.address}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="phoneNumber">
            <FormattedMessage id="manage-user.phone-number" />
          </label>
          <input
            required
            name="phoneNumber"
            type="text"
            id="phoneNumber"
            onChange={(e) => handleOnChange(e)}
            value={userDetails.phoneNumber}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="gender">
            <FormattedMessage id="manage-user.gender" />
          </label>
          <select
            required
            defaultValue="M"
            name="genderId"
            id="gender"
            onChange={(e) => handleSelected(e)}
          >
            {genderArray.map((item, index) => {
              const { keyMap, valueEn, valueVi } = item;
              return (
                <option key={index} value={keyMap}>
                  {language === 'vi' ? valueVi : valueEn}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="roleId">
            <FormattedMessage id="manage-user.role" />
          </label>
          <select
            defaultValue="R1"
            required
            name="roleId"
            id="roleId"
            onChange={(e) => handleSelected(e)}
          >
            {roleArray.map((item, index) => {
              const { keyMap, valueEn, valueVi } = item;
              return (
                <option key={index} value={keyMap}>
                  {language === 'vi' ? valueVi : valueEn}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="position">
            <FormattedMessage id="manage-user.position" />
          </label>
          <select
            defaultValue="P0"
            required
            name="positionId"
            id="position"
            onChange={(e) => handleSelected(e)}
          >
            {positionArray.map((item, index) => {
              const { keyMap, valueEn, valueVi } = item;
              return (
                <option key={index} value={keyMap}>
                  {language === 'vi' ? valueVi : valueEn}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">
            <FormattedMessage id="manage-user.image" />
          </label>
          <input type="text" id="image" placeholder={userDetails.image} />
        </div>
        <button type="submit" className="submit-btn">
          <FormattedMessage id="manage-user.save" />
        </button>
      </form>
    </div>
  );
};

export default ManagingUserModal;
