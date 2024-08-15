const mongoose = require('mongoose');

const ownerAuthorizationToRent = new mongoose.Schema(
    {
        date: Date,
        propertyAddress: String,
        bookingFeeIn: {
            word: String,
            RM: Number
        },
        commissionFee: {
            month: Number,
            total: Number,
        },
        appointmentValidity: {
            from: Date,
            to: Date
        },
        signature: {
            owner1: {
                name: String,
                NRICNo: String,
                telNo: String,
                date: Date
            },
            owner2: {
                name: String,
                NRICNo: String,
                telNo: String,
                date: Date
            },
            witness: {
                name: String,
                NRICNo: String,
                telNo: String,
                date: Date
            }
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('OwnerAuthorizationToRent', ownerAuthorizationToRent);
