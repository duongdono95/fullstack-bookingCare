import { request } from 'express';
import homePageService from '../nodeServices/homePageService'

export const getDoctors = async (req, res) => {
  let code = req.query.id;
  if (!code) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameter',
      doctors: []
    })
  }
  if (code) {
    let data = await homePageService.getDoctors(code);
    return res.status(200).json({
      errCode: 0,
      errMessage: 'Fetched Doctor Data Successfully',
      data
    })
  }
}

module.exports = {
  getDoctors: getDoctors
}