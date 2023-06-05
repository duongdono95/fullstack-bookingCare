import db from '../models/index';

const postDoctorInfor = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !inputData.doctorId ||
        !inputData.contentHTML ||
        !inputData.contentMarkdown ||
        !inputData.action ||
        !inputData.price ||
        !inputData.payment ||
        !inputData.province ||
        !inputData.clinicName ||
        !inputData.clinicAddress
      ) {
        resolve({
          errCode: 1,
          errMessage: 'Missing parameter',
        });
      } else {
        if (inputData.action === 'CREATE') {
          await db.Markdown.create({
            contentHTML: inputData.contentHTML,
            contentMarkdown: inputData.contentMarkdown,
            description: inputData.description,
            doctorId: inputData.doctorId,
            // specialtyId: ,
            // clinicId: ,
          });
        }
      }
    } catch (e) {}
  });
};
module.exports = {
  postDoctorInfor: postDoctorInfor,
};
