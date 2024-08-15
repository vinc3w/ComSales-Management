const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const multer = require('multer');
const { v4: uuid } = require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/user/profileImage');
    },
    filename: function (req, file, cb) {
        cb(null, uuid() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});
const upload = multer({ storage });

router.post('/auth/register', upload.single('profileImage'), authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/forgot-password', authController.forgotPassword);
router.post('/auth/reset-password', authController.resetPassword);
router.delete('/auth/logout', authController.logout);

module.exports = router;
