import db from '../models/index';
import _ from 'lodash';
const postDoctorInfo = (inputData) => {
  return new Promise(async (resolve, reject) => {
    console.log(inputData.doctorId);
    try {
      if (
        !inputData.doctorId |
        !inputData.contentHTML |
        !inputData.contentMarkdown |
        !inputData.priceId |
        !inputData.paymentId |
        !inputData.provinceId |
        !inputData.clinicName |
        !inputData.clinicAddress |
        !inputData.description |
        !inputData.action
      ) {
        resolve({
          errCode: 1,
          errMessage: 'Missing parameter',
        });
      }
      if (inputData.action === 'CREATE') {
        await db.Doctor_Infor.create(
          {
            doctorId: inputData.doctorId,
            contentHTML: inputData.contentHTML,
            contentMarkdown: inputData.contentMarkdown,
            priceId: inputData.priceId,
            paymentId: inputData.paymentId,
            provinceId: inputData.provinceId,
            clinicName: inputData.clinicName,
            clinicAddress: inputData.clinicAddress,
            description: inputData.description,
          },
          resolve({
            errCode: 0,
            errMessage: 'Create Doctor Info Successfully',
          }),
        );
      } else if (inputData.action === 'EDIT') {
        let doctorInforDB = db.Doctor_Infor.findOne({
          where: { doctorId: inputData.doctorId },
          raw: false,
        });
        if (doctorInforDB) {
          (doctorInforDB.doctorId = inputData.doctorId),
            (doctorInforDB.contentHTML = inputData.contentHTML),
            (doctorInforDB.contentMarkdown = inputData.contentMarkdown),
            (doctorInforDB.priceId = inputData.priceId),
            (doctorInforDB.paymentId = inputData.paymentId),
            (doctorInforDB.provinceId = inputData.provinceId),
            (doctorInforDB.ClinicName = inputData.clinicName),
            (doctorInforDB.ClinicAddress = inputData.clinicAddress),
            (doctorInforDB.description = inputData.description),
            (doctorInforDB.updateAt = new Date());
          await doctorInforDB.save();
        }
        resolve({
          errCode: 0,
          errMessage: 'Save Doctor Info Successfully',
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const saveDoctorSchedules = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let existing = await db.Schedule.findAll({
        attributes: ['timeType', 'date', 'doctorId'],
        raw: true,
      });
      const newSchedules = _.differenceWith(data, existing, _.isEqual);
      console.log(newSchedules);
      if (existing) {
        await db.Schedule.bulkCreate(data);
      } else if (newSchedules.length > 0) {
        await db.Schedule.bulkCreate(newSchedules);
      } else {
        return;
      }
      resolve({
        errCode: 0,
        errMessage: 'Create Schedule Successfully',
      });
    } catch (e) {
      reject(e);
    }
  });
};
const getAllBookedSchedules = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.date && !data.doctorId) {
        resolve({
          errCode: 0,
          errMessage: 'Missing required Param',
        });
      }
      const response = await db.Schedule.findAll({
        raw: true,
        where: {
          date: data.date,
          doctorId: data.doctorId,
        },
        attributes: ['timeType'],
      });
      console.log('heloooooooooooooooo', response);
      resolve({
        errCode: 0,
        errMessage: 'Create Schedule Successfully',
        allBookedSchedules: response,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const getDoctorDetails = (doctorId) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(doctorId);
      const doctorInfor = await db.Doctor_Infor.findOne({
        where: {
          doctorId: doctorId,
        },
        include: [
          { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
          { model: db.Allcode, as: 'provinceTypeData', attributes: ['valueEn', 'valueVi'] },
          { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
        ],
      });
      if (doctorInfor) {
        resolve(doctorInfor);
      } else {
        resolve('Doctor not found');
      }
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
module.exports = {
  postDoctorInfo: postDoctorInfo,
  saveDoctorSchedules: saveDoctorSchedules,
  getAllBookedSchedules: getAllBookedSchedules,
  getDoctorDetails: getDoctorDetails,
};
