import db from '../models/index';
const getuser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = '';
      users = await db.User.findAll();
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getuser: getuser,
};
