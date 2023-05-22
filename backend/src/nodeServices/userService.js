import db from '../models/index';
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

let checkUserEmail = (providedEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: providedEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleLogin: handleLogin,
};
