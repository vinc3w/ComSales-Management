const mongoose = require('mongoose');
const moment = require('moment');

const saleCase = new mongoose.Schema(
    {
        name: {
            type: String,
            default: null
        },
        agent:  {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        agentName: String,
        status: {
            type: String,
            enum: ['pending', 'approved', 'completed'],
            default: 'pending'
        },
        ownerName: String,
        buyerName: String,
        property: {
            type: {
                type: String,
                enum: ['sale', 'rent'],
            },
            address: String
        },
        commission: {
            amount: Number,
            amountWithTax: Number
        },
        dateOpened: {
            type: Date,
            default: moment().format('L')
        },
        dateClosed: {
            type: Date,
            default: null
        },
        offerToPurchaseForm:  {
            type: mongoose.Types.ObjectId,
            ref: 'OfferToPurchase'
        },
        offerToRentForm:  {
            type: mongoose.Types.ObjectId,
            ref: 'OfferToRent'
        },
        ownerAuthorizationToSaleForm:  {
            type: mongoose.Types.ObjectId,
            ref: 'OwnerAuthorizationToSale'
        },
        ownerAuthorizationToRentForm:  {
            type: mongoose.Types.ObjectId,
            ref: 'OwnerAuthorizationToRent'
        },
        viewerAcknowledgementForm:  {
            type: mongoose.Types.ObjectId,
            ref: 'ViewerAcknowledgement'
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Case', saleCase);
