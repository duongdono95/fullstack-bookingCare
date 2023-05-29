import { request } from 'express';
import homePageSerivce from '../nodeServices/homePageService';

// export const getDoctors = async (req, res) => {
//   let code = req.query.id;
//   if (!id) {
//     return res.status(200).json({
//       errCode: 1,
//       errMessage: 'Missing required parameter',
//       doctors: []
//     })
//   }
//   if (id) {
//     let doctors = await homePageSerivce.getDoctors(code);
//     return res.status(200).json({
//       errCode: 0,
//       errMessage: 'Fetched Doctor Data Successfully',
//       doctors
//     })
//   }
// }

module.exports = {
  // getDoctors: getDoctors
}