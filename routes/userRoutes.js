const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');


const router  = express.Router();

router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.get('/logout',authController.logout);

router.post('/forgotPassword',authController.forgotPassword);
router.patch('/resetPassword/:token',authController.resetPassword);


//protect all routes after this middleware
router.use(authController.protect);//if the user is authenticated all the below will work

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.uploadUserPhoto, userController.resizeUserPhoto , userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);//delete own account

router.use(authController.restrictTo('admin'));//only admin will do the below task

router.route('/').get(userController.getAllUsers).post(userController.createUser);
router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;