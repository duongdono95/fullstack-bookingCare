import db from '../models/index';

const getDoctors = (code) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: { roleId: code },
        attributes: {
          exclude: ['password']
        }
      })
      resolve({
        doctors
      })
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = {
  getDoctors: getDoctors,
}