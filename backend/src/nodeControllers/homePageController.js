import homePageService from '../nodeServices/homePageService';

export const getDoctors = async (req, res) => {
  let code = req.query.id;
  if (!code) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameter',
      doctors: [],
    });
  }
  if (code) {
    let data = await homePageService.getDoctors(code);
    return res.status(200).json({
      errCode: 0,
      errMessage: 'Fetched Doctor Data Successfully',
      data,
    });
  }
};

const getAllSpecialties = async (req, res) => {
  try {
    let specialtyId = req.query.id;
    console.log(specialtyId);
    if (!specialtyId) {
      return res.status(200).json({
        errCode: 1,
        errMessage: 'Missing required parameter',
      });
    } else {
      const response = await homePageService.getAllSpecialties(specialtyId);
      res.status(200).json({
        errCode: 0,
        errMessage: 'Fetched Specialties Successfully',
        data: response,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

module.exports = {
  getDoctors: getDoctors,
  getAllSpecialties: getAllSpecialties,
  // getAllClinics: getAllClinics,
};
