const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const authController = require('../controllers/authControllers');



router.post('/login',authController.login)
router.post('/signup',authController.signup)

router
  .route('/')
  .get(userController.getAllusers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
