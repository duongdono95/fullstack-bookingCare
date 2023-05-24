import express from 'express';
import userController from '../nodeControllers/userController';
let router = express.Router();

let initWebRoutes = (app) => {
  router.post('/login', userController.handleLogin);
  router.get('/admin/getUsers', userController.getUsers);
  return app.use('/', router);
};

module.exports = initWebRoutes;
