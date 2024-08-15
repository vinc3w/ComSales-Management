const mongoose = require('mongoose');
const moment = require('moment');
const { LOCK_FOR } = require('../../config.json');

const failedLogin = new mongoose.Schema(
    {
        userId: mongoose.Types.ObjectId,
        loginAttempts: Number,
        lockUntil: Date
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('FailedLogin', failedLogin);
