import db from '../models/index';
import { checkUserEmail, hashUserPassword } from '../helper/helper';

const handleLogin = (email, password) => {
  console.log(email, password);
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let checkedPassword = false;
        let user = await db.User.findOne({
          attributes: ['email', 'roleId', 'password', 'firstName', 'lastName'],
          where: { email: email },
          raw: true,
        });
        if (user) {
          if (user.password === password) {
            checkedPassword = true;
          } else {
            checkedPassword = false;
          }
          if (checkedPassword) {
            userData.errCode = 0;
            userData.errMessage = 'OK';

            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = 'Wrong password';
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in our system, plz try other email`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

const getUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = '';
      if (userId && userId === 'ALL') {
        users = await db.User.findAll({
          attributes: {
            exclude: ['password'],
          },
        });
      }
      if (userId && userId !== 'ALL') {
        users = await db.User.findOne({
          where: { id: userId },

          attributes: {
            exclude: ['password'],
          },
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};
const addNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    let check = await checkUserEmail(data.email);
    if (check === true) {
      resolve({
        errCode: 1,
        errMessage: 'Email has been used.',
      });
    } else {
      let hashedPassword = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        roleId: data.roleId,
        positionId: data.positionId,
        image: data.image,
      });
      resolve({
        errCode: 0,
        errMessage: 'Create new User Successfully',
      });
    }
    try {
    } catch (e) {
      reject(e);
    }
  });
};

const editUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.roleId || !data.positionId || !data.gender) {
        resolve({
          errCode: 2,
          errMessage: 'missing required parameter',
        });
      }
      let user = await db.User.findOne({
        where: {
          id: data.id,
          // raw: false,
        },
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.roleId = data.roleId;
        user.positionId = data.positionId;
        user.gender = data.gender;
        user.phoneNumber = data.phoneNumber;
        if (data.avatar) {
          user.image = data.image;
        }
        await user.save();
        resolve({
          errCode: 0,
          message: 'Update User Details Successfully',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    let dbUser = await db.User.findOne({
      where: { id: userId },
    });
    if (!dbUser) {
      resolve({
        errCode: 2,
        errMessage: 'User not found!',
      });
    }
    await db.User.destroy({
      where: { id: userId },
    });
    resolve({
      errCode: 0,
      errMessage: 'Delete User Successfully',
    });
  });
};
const getAllCode = (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!type) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameter',
        });
      }
      if (type !== 'ALL') {
        let res = {};
        let allcode = await db.Allcode.findAll({
          where: { type: type },
        });
        res.errCode = 0;
        res.message = 'Fetch all codes successfully';
        res.data = allcode;
        resolve(res);
      }
      if (type === 'ALL') {
        let res = {};
        let allcode = await db.Allcode.findAll();
        res.errCode = 0;
        res.message = 'Fetch all codes successfully';
        res.data = allcode;
        resolve(res);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleLogin: handleLogin,
  getUsers: getUsers,
  addNewUser: addNewUser,
  editUser: editUser,
  deleteUser: deleteUser,
  getAllCode: getAllCode,
};
