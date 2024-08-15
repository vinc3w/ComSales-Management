const mongoose = require('mongoose');

const ownerAuthorizationToSale = new mongoose.Schema(
    {
        date: Date,
        propertyAddress: String,
        propertyPriceIn: {
            word: String,
            RM: Number
        },
        landAndBuildingFee: Number,
        commissionFee: {
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

module.exports = mongoose.model('OwnerAuthorizationToSale', ownerAuthorizationToSale);
