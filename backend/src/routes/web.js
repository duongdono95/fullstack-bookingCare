import express from 'express';
import userController from '../nodeControllers/userController';
import homePageController from '../nodeControllers/homePageController';
import doctorController from '../nodeControllers/doctorController';
let router = express.Router();

let initWebRoutes = (app) => {
  router.post('/login', userController.handleLogin);
  router.get('/admin/getUsers', userController.getUsers);
  router.post('/admin/addNewUser', userController.addNewUser);
  router.post('/admin/editUser', userController.editUser);
  router.delete('/admin/deleteUser', userController.deleteUser);

  router.post('/doctor/saveDoctorDetails', doctorController.postDoctorInfo);

  router.get('/homePage/getAllDoctors', homePageController.getDoctors);
  router.get('/api/allcode', userController.getAllCode);
  return app.use('/', router);
};

module.exports = initWebRoutes;
