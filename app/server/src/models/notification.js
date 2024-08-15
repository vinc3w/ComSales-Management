const mongoose = require('mongoose');

const notification = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        receiver: mongoose.Types.ObjectId,
        message: String
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('Notification', notification);
