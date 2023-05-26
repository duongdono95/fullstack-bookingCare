import React, { useState } from 'react';
import './ManagingUserModal.scss';
interface Props {
  modalTitle: string;
}

const ManagingUserModal: React.FC<Props> = ({ modalTitle }) => {
  const [userDetail, setUserDetails] = useState();
  return (
    <div className="create-new-user">
      <h1>{modalTitle === 'create' ? 'Create New User' : 'Edit User'}</h1>
      <form action="" className="form--container">
        <div className="close-btn">
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input required name="email" type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input required name="password" type="password" id="password" />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="firstName">First Name</label>
          <input required name="firstName" type="text" id="firstName" />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="lastName">Last Name</label>
          <input required name="lastName" type="text" id="lastName" />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="address">Address</label>
          <input required name="address" type="text" id="address" />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input required name="phoneNumber" type="text" id="phoneNumber" />
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="gender">Gender</label>
          <select required name="gender" id="gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="roleId">Role</label>
          <select required name="roleId" id="roleId">
            <option value="R1">Admin</option>
            <option value="R2">Doctor</option>
            <option value="R3">Patient</option>
          </select>
        </div>
        <div className="form-group halfWidth">
          <label htmlFor="position">Position</label>
          <select required name="position" id="position">
            <option value="P0">Dr</option>
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
