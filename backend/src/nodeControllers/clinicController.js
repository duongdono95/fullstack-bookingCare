import clinicService from '../nodeServices/clinicService';

const saveClinic = async (req, res) => {
  try {
    const clinicDetails = req.body;
    if (
      !clinicDetails.clinicId |
      !clinicDetails.contentHTML |
      !clinicDetails.contentMarkdown |
      !clinicDetails.doctorId |
      !clinicDetails.image |
      !clinicDetails.address
    ) {
      return res.status(200).json({
        errCode: 1,
        errMessage: 'Missing Required Parameter',
      });
    } else {
      let response = await clinicService.saveClinic(clinicDetails);
      res.status(200).json({
        response,
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

const getClinics = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing Required Parameters',
      data: [],
    });
  }
  if (id) {
    let data = await clinicService.getClinics(id);
    return res.status(200).json({
      errCode: 0,
      errMessage: 'Fetched User Data Successfully',
      data,
    });
  }
};

module.exports = {
  saveClinic: saveClinic,
  getClinics: getClinics,
};
