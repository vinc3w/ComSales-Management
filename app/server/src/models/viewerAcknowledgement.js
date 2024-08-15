const mongoose = require('mongoose');

const viewerAcknowledgement = new mongoose.Schema(
    {
        viewerName: String,
        NRICNo: String,
        currentAddress: String,
        telephoneNo: String,
        time: Date,
        carPlateNo: String,
        propertyToBeViewedAddress: String
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('ViewerAcknowledgement', viewerAcknowledgement);
