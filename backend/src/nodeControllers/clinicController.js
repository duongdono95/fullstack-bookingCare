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

module.exports = {
  saveClinic: saveClinic,
};
