const mongoose = require('mongoose');

const offerToRent = new mongoose.Schema(
    {
        tenantName: String,
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
            bank: String,
            dated: Date
        },
        termsAndConditions: {
            advanceRentalFor1MonthPrice: Number,
            securityDeposit: {
                forMonths: Number,
                price: Number
            },
            utilitiesDepositPrice: Number,
            accessCard: {
                pcs: Number,
                carDepositPcs: Number,
                price: Number
            },
            stampingFeeAndDisbursermentOfTenancyAgreementPrice: Number,
            totalToBePaidBeforeReleaseOfKeysPrice: Number,
            lessEarnestDepositPrice: Number,
            balancePrice: Number,
            tenancyCommencementDate: Date,
            periodOfTenancyIn: {
                word: String,
                year: Number
            },
            optionToRenewTenancyForAnotherIn: {
                word: String,
                year: Number
            },
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

module.exports = mongoose.model('OfferToRent', offerToRent);
