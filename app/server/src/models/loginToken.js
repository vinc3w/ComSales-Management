const mongoose = require('mongoose');

const loginToken = new mongoose.Schema(
    {
        userId: mongoose.Types.ObjectId,
        expiresAt: {
            type: Date,
            expires: 86400 // 1 day
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('LoginToken', loginToken);
