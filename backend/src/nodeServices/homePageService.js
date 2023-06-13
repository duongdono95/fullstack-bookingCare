import db from '../models/index';

const getDoctors = (code) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: { roleId: code },
        attributes: {
          exclude: ['password'],
        },
        include: [
          { model: db.Allcode, as: 'roleData', attributes: ['valueEn', 'valueVi'] },
          { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] }
        ],
      });
      resolve({
        doctors,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllSpecialties = (specialtyId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (specialtyId === 'ALL') {
        const response = await db.Specialty.findAll({
          include: [{ model: db.Allcode, as: 'specialtyName', attributes: ['valueEn', 'valueVi'] }],
        });
        resolve(response);
      } else {
        const response = await db.Specialty.findOne({
          where: { id: specialtyId },
        });
        resolve(response);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getDoctors: getDoctors,
  getAllSpecialties: getAllSpecialties,
};
