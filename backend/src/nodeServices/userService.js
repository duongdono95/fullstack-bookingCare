import db from '../models/index';
import { checkUserEmail } from "../helper/helper";
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
          }
        })
      }
      if (userId && userId !== 'ALL') {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ['password']
          }
        })
      }
      resolve(users)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  handleLogin: handleLogin,
  getUsers: getUsers
};
