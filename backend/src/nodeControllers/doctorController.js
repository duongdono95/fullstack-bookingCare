import doctorServices from '../nodeServices/doctorServices';
const postDoctorInfo = async (req, res) => {
  try {
    let response = await doctorServices.postDoctorInfo(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'ERROR from server',
    });
  }
};
const saveDoctorSchedules = async (req, res) => {
  try {
    let response = await doctorServices.saveDoctorSchedules(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};
const getAllBookedSchedules = async (req, res) => {
  try {
    let response = await doctorServices.getAllBookedSchedules(req.query);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};
const getDoctorDetails = async (req, res) => {
  try {
    const doctorId = req.query.doctorId;

    if (!doctorId) {
      return res.status(200).json({
        errCode: 1,
        errMessage: 'Missing required Parameter',
      });
    } else {
      let response = await doctorServices.getDoctorDetails(doctorId);
      console.log('helooooooooooooo', response);
      return res.status(200).json({
        errCode: 0,
        errMessage: 'Fetched Doctor Details Successfully',
        data: response,
      });
    }
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from Server',
    });
  }
};
module.exports = {
  postDoctorInfo: postDoctorInfo,
  saveDoctorSchedules: saveDoctorSchedules,
  getAllBookedSchedules: getAllBookedSchedules,
  getDoctorDetails: getDoctorDetails,
};
