import db from '../models/index';

const postDoctorInfo = (inputData) => {
  return new Promise(async (resolve, reject) => {
    console.log(inputData.doctorId)
    try {
      if (
        !inputData.doctorId |
        !inputData.contentHTML |
        !inputData.contentMarkdown |
        !inputData.price |
        !inputData.payment |
        !inputData.province |
        !inputData.clinicName |
        !inputData.clinicAddress |
        !inputData.description |
        !inputData.action
        // !inputData
      ) {
        resolve({
          errCode: 1,
          errMessage: 'Missing parameter',
        });
      }
      if (inputData.action === "CREATE") {
        await db.Doctor_Infor.create({
          doctorId: inputData.doctorId,
          contentHTML: inputData.contentHTML,
          contentMarkdown: inputData.contentMarkdown,
          priceId: inputData.price,
          paymentId: inputData.payment,
          provinceId: inputData.province,
          clinicName: inputData.clinicName,
          clinicAddress: inputData.clinicAddress,
          description: inputData.description

        },
          resolve({
            errCode: 0,
            errMessage: 'Create Doctor Info Successfully'
          }));
      } else if (inputData.action === "EDIT") {
        let doctorInforDB = db.Doctor_Infor.findOne({
          where: { doctorId: inputData.doctorId },
          raw: false
        })
        if (doctorInforDB) {
          doctorInforDB.doctorId = inputData.doctorId,
            doctorInforDB.contentHTML = inputData.contentHTML,
            doctorInforDB.contentMarkdown = inputData.contentMarkdown,
            doctorInforDB.priceId = inputData.price,
            doctorInforDB.paymentId = inputData.payment,
            doctorInforDB.provinceId = inputData.province,
            doctorInforDB.ClinicName = inputData.clinicName,
            doctorInforDB.ClinicAddress = inputData.clinicAddress,
            doctorInforDB.description = inputData.description,
            doctorInforDB.updateAt = new Date();
          await doctorInforDB.save()
        }
        resolve({
          errCode: 0,
          errMessage: 'Save Doctor Info Successfully'
        })


      }
    } catch (e) {
      reject(e)
    }
  });
};
module.exports = {
  postDoctorInfo: postDoctorInfo,
};
