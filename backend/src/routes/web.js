import express from 'express';
import userController from '../nodeControllers/userController';
import homePageController from '../nodeControllers/homePageController';
import doctorController from '../nodeControllers/doctorController';
import specialtyController from '../nodeControllers/specialtyController';
let router = express.Router();

let initWebRoutes = (app) => {
  router.post('/login', userController.handleLogin);
  router.get('/admin/getUsers', userController.getUsers);
  router.post('/admin/addNewUser', userController.addNewUser);
  router.post('/admin/editUser', userController.editUser);
  router.delete('/admin/deleteUser', userController.deleteUser);

  router.post('/doctor/saveDoctorDetails', doctorController.postDoctorInfo);
  router.get('/doctor/getDoctorDetails', doctorController.getDoctorDetails);
  router.post('/doctor/saveDoctorSchedules', doctorController.saveDoctorSchedules);
  router.get('/doctor/getAllBookedSchedules', doctorController.getAllBookedSchedules);

  router.post('/specialty/saveSpecialty', specialtyController.saveSpecialty);

  router.get('/homePage/getAllDoctors', homePageController.getDoctors);
  router.get('/homePage/getAllSpecialties', homePageController.getAllSpecialties);
  // router.get('/homePage/getAllClinics', homePageController.getAllClinics);

  router.get('/api/allcode', userController.getAllCode);
  return app.use('/', router);
};

module.exports = initWebRoutes;
