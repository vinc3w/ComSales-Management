const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
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

router.get('/user', userController.get);
router.get('/user/all', userController.getAll);
router.put('/user', upload.single('profileImage'), userController.update);
router.delete('/user', userController.delete);

module.exports = router;
