import userService from '../nodeServices/userService';

const getuser = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameter',
      users: [],
    });
  }
  let users = await userService.getuser(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Data is fetched successfully',
    users,
  });
};

module.exports = {
  getuser: getuser,
};
