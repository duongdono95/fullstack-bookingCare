const doctorServices = require('../nodeServices/doctorServices');

const postDoctorInfor = async (req, res) => {
  try {
    let response = await doctorServices.postDoctorInfor(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'ERROR from server',
    });
  }
};
module.exports = {
  postDoctorInfor: postDoctorInfor,
};
