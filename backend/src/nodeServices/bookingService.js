import db from '../models';

const postNewBooking = (bookingDetails) => {
  console.log('hellooooooooo', bookingDetails);
  return new Promise(async (resolve, reject) => {
    try {
      await db.Booking.create(bookingDetails);

      resolve({
        errCode: 0,
        errMessage: 'Create Booking Successfully',
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  postNewBooking: postNewBooking,
};
