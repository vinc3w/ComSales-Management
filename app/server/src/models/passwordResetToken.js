const mongoose = require('mongoose');

const passwordResetToken = new mongoose.Schema(
    {
        userId: String,
        expiresAt: {
            type: Date,
            default: Date.now(),
            expires: 3600
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('PasswordResetToken', passwordResetToken);
