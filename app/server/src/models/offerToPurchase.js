    const mongoose = require('mongoose');

const offerToPurchase = new mongoose.Schema(
    {
        purchaserName: String,
        propertyAddress: String,
        totalPriceIn: {
            word: String,
            RM: Number
        },
        depositSumIn: {
            word: String,
            RM: Number
        },
        payment: {
            no: String,
            dated: Date
        },
        termsAndConditions: {
            loanApplicationPercentage: String,
            additionalClause: String,
        },
        signature: {
            purchaser: {
                1: {
                    name: String,
                    NRICNo: String,
                    telNo: String,
                    date: Date
                },
                2: {
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
            },
            vendor: {
                1: {
                    name: String,
                    NRICNo: String,
                    telNo: String,
                    date: Date
                },
                2: {
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
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('OfferToPurchase', offerToPurchase);
