import db from '../models';

const saveClinic = (clinicDetails) => {
  console.log(clinicDetails);
  return new Promise(async (resolve, reject) => {
    try {
      await db.Clinic.create({
        clinicId: clinicDetails.clinicId,
        contentHTML: clinicDetails.contentHTML,
        contentMarkdown: clinicDetails.contentMarkdown,
        doctorId: clinicDetails.doctorId,
        image: clinicDetails.image,
        address: clinicDetails.address,
      });

      resolve({
        errCode: 0,
        errMessage: 'Create Clinic Specialty Successfully',
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  saveClinic: saveClinic,
};
