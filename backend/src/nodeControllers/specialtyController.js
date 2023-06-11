import specialtyService from '../nodeServices/specialtyService'
const saveSpecialty = async (req, res) => {
  try {
    const specialtyFormArr = req.body
    if (!specialtyFormArr) {
      return res.status(200).json({
        errCode: 1,
        errMessage: 'Missing Required Parameter'
      })
    } else {
      let response = await specialtyService.saveSpecialty(specialtyFormArr)
      res.status(200).json({
        response
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server'
    })
  }
}

module.exports = {
  saveSpecialty: saveSpecialty,
}