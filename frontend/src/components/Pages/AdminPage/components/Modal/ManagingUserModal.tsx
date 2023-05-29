import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { createUser, editUser } from '../../../../../services/userServices';
import { initialInputForm } from '../../../../../utils/constants';
import { User } from '../../../../../utils/types';
import './ManagingUserModal.scss';
import { toast } from 'react-toastify';

interface Props {
  modalTitle: string;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  editUserDetail?: User;
}

const ManagingUserModal: React.FC<Props> = ({ modalTitle, setIsOpenModal, editUserDetail }) => {
  const queryClient = useQueryClient();
  const [userDetails, setUserDetails] = useState<User>(
    editUserDetail ? editUserDetail : initialInputForm,
  );
  // access to the mutation
  const addUserMutation = useMutation({
    mutationFn: async (userDetail: User) => {
      const response = await createUser(userDetail);
      // return response;
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      } else {
        toast.success('Create New User Successfully');
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

  return (
    <div className="create-new-user">
      <h1>{modalTitle === 'create' ? 'Create New User' : 'Edit User'}</h1>
      <form action="" className="form--container" onSubmit={(e) => handleSubmitUser(e)}>
        <div className="close-btn" onClick={() => setIsOpenModal(false)}>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            type="email"
            id="email"
            onChange={(e) => handleOnChange(e)}
            placeholder={userDetails.email}
            disabled={modalTitle === 'edit' ? true : false}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            type="password"
            id="password"
            onChange={(e) => handleOnChange(e)}
            placeholder={userDetails.password}
            disabled={modalTitle === 'edit' ? true : false}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="firstName">First Name</label>
          <input
            required
            name="firstName"
            type="text"
            id="firstName"
            onChange={(e) => handleOnChange(e)}
            placeholder={userDetails.firstName}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            name="lastName"
            type="text"
            id="lastName"
            onChange={(e) => handleOnChange(e)}
            placeholder={userDetails.lastName}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="address">Address</label>
          <input
            required
            name="address"
            type="text"
            id="address"
            onChange={(e) => handleOnChange(e)}
            placeholder={userDetails.address}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            required
            name="phoneNumber"
            type="text"
            id="phoneNumber"
            onChange={(e) => handleOnChange(e)}
            placeholder={userDetails.phoneNumber}
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="gender">Gender</label>
          <select name="genderId" id="gender" onChange={(e) => handleSelected(e)}>
            <option selected value="M">
              Male
            </option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="roleId">Role</label>
          <select required name="roleId" id="roleId" onChange={(e) => handleSelected(e)}>
            <option selected value="R1">
              Admin
            </option>
            <option value="R2">Doctor</option>
            <option value="R3">Patient</option>
          </select>
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="position">Position</label>
          <select required name="positionId" id="position" onChange={(e) => handleSelected(e)}>
            <option selected value="P0">
              Dr
            </option>
            <option value="P2">Doctor</option>
            <option value="P3">Associate Professor</option>
            <option value="P4">Professor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" placeholder={userDetails.image} />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManagingUserModal;
