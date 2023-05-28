import React, { useState } from 'react';
import { InitialInputForm } from '../../../../../utils/types';
import './ManagingUserModal.scss';
interface Props {
  modalTitle: string;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ManagingUserModal: React.FC<Props> = ({ modalTitle, setIsOpenModal }) => {
  const initialInputForm = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    genderId: 'M',
    roleId: 'R1',
    positionId: 'P0',
    image: '',
  };
  const [userDetails, setUserDetails] = useState<InitialInputForm>(initialInputForm);
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
          />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="gender">Gender</label>
          <select required name="genderId" id="gender" onChange={(e) => handleSelected(e)}>
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
            <option value="P1">Master</option>
            <option value="P2">Doctor</option>
            <option value="P3">Associate Professor</option>
            <option value="P4">Professor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManagingUserModal;
