import db from '../models/index';

const getDoctors = (code) => {
  // return new Promise(async (resolve, reject) => {
  //   try {
  //     let doctors = '';
  //     // if(code && code === "DOCTORS") {
  //     //   doctors = await db.User.findAll({
  //     //     attributes: {
  //     //       exclude: ['password']
  //     //     }
  //     //   })
  //     // }
  //   } catch (e) {
  //     reject(e)
  //   }
  // })
}

module.exports = {
  getDoctors: getDoctors,
}