import doctorServices from '../nodeServices/doctorServices'
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
      errMessage: 'Error from server'
    })
  }
}
module.exports = {
  postDoctorInfo: postDoctorInfo,
  saveDoctorSchedules: saveDoctorSchedules,
};
