import db from '../models';

const saveSpecialty = (specialtyFormArr) => {
  console.log(specialtyFormArr);
  return new Promise(async (resolve, reject) => {
    try {
      await db.Specialty.create({
        contentHTML: specialtyFormArr.contentHTML,
        contentMarkdown: specialtyFormArr.contentMarkdown,
        doctorId: specialtyFormArr.doctorId,
        image: specialtyFormArr.image,
        specialty: specialtyFormArr.specialty,
      });

      resolve({
        errCode: 0,
        errMessage: 'Create Doctor Specialty Successfully',
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  saveSpecialty: saveSpecialty,
};
