import { request } from 'express';
import userService from '../nodeServices/userService';

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).json({
      errCode: 1,
      message: 'Missing required parameters',
    });
  }
  let userData = await userService.handleLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

const getUsers = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing Required Parameters',
      users: [],
    });
  }
  if (id) {
    let users = await userService.getUsers(id);
    return res.status(200).json({
      errCode: 0,
      errMessage: 'Fetched User Data Successfully',
      users,
    });
  }
};
const addNewUser = async (req, res) => {
  let message = await userService.addNewUser(req.body);
  return res.status(200).json(message);
};
const editUser = async (req, res) => {
  let data = req.body;
  let message = await userService.editUser(data);
  return res.status(200).json(message);
};
const deleteUser = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (!userId) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required Parametter',
    });
  }
  let message = await userService.deleteUser(userId);
  return res.status(200).json(message);
};
const getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCode(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};
module.exports = {
  handleLogin: handleLogin,
  getUsers: getUsers,
  addNewUser: addNewUser,
  editUser: editUser,
  deleteUser: deleteUser,
  getAllCode: getAllCode,
};
