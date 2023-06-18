import bookingService from '../nodeServices/bookingService';

const postNewBooking = async (req, res) => {
  try {
    const bookingDetails = req.body;
    console.log(bookingDetails);
    if (
      !bookingDetails.doctorId |
      !bookingDetails.date |
      !bookingDetails.timeType |
      !bookingDetails.patientFullName |
      !bookingDetails.patientEmail |
      !bookingDetails.patientPhoneNumber
    ) {
      return res.status(200).json({
        errCode: 1,
        errMessage: 'Missing Required Parameter',
      });
    } else {
      let response = await bookingService.postNewBooking(bookingDetails);
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
  postNewBooking: postNewBooking,
};
