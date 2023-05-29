import express from 'express';
import userController from '../nodeControllers/userController';
let router = express.Router();

let initWebRoutes = (app) => {
  router.post('/login', userController.handleLogin);
  router.get('/admin/getUsers', userController.getUsers);
  router.post('/admin/addNewUser', userController.addNewUser);
  router.post('/admin/editUser', userController.editUser);
  return app.use('/', router);
};

module.exports = initWebRoutes;
