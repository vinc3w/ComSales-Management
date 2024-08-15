const saleCase = require('../models/saleCase');
const ownerAuthorizationToSale = require('../models/ownerAuthorizationToSale');
const ownerAuthorizationToRent = require('../models/ownerAuthorizationToRent');
const offerToRent = require('../models/offerToRent');
const offerToPurchase = require('../models/offerToPurchase');
const viewerAcknowledgement = require('../models/viewerAcknowledgement');
const { LIMIT_COUNT } = require('../../config.json');

module.exports = class saleCaseService {

    static async getAllCount() {

        const count = await saleCase.countDocuments();
        return count;

    }

    static async getById(id) {

        const saleCaseResponse = await saleCase.findById(id);
        return saleCaseResponse;
        
    }

    static async get(search, sort, order, page) {

        const saleCaseResponse = await saleCase.find(search, null, {
            skip: (page - 1) * LIMIT_COUNT,
            limit: LIMIT_COUNT
        })
            .populate(['agent', 'offerToPurchaseForm',
                        'offerToRentForm', 'ownerAuthorizationToSaleForm',
                        'ownerAuthorizationToRentForm', 'viewerAcknowledgementForm'])
            .sort([[sort, order]])
            .exec();
        return saleCaseResponse;
            
    }

    static async getForm(type, id) {

        switch (type) {
            case 'otp':
                const newOfferToPurchase = await offerToPurchase.findById(id);
                return newOfferToPurchase;
            case 'otr':
                const newOfferToRent = await offerToRent.findById(id);
                return newOfferToRent;
            case 'oats':
                const newOwnerAuthorizationToSale = await ownerAuthorizationToSale.findById(id);
                return newOwnerAuthorizationToSale;
            case 'oatr':
                const newOwnerAuthorizationToRent = await ownerAuthorizationToRent.findById(id);
                return newOwnerAuthorizationToRent;
            case 'va':
                const newViewerAcknowledgement = await viewerAcknowledgement.findById(id);
                return newViewerAcknowledgement;
        }

    }

    static async create(data) {

        const newsaleCase = new saleCase(data);
        newsaleCase.save();
        return newsaleCase;
        
    }

    static async createForm(type, data) {

        switch (type) {
            case 'otp':
                const newOfferToPurchase = new offerToPurchase(data);
                newOfferToPurchase.save();
                return newOfferToPurchase;
            case 'otr':
                const newOfferToRent = new offerToRent(data);
                newOfferToRent.save();
                return newOfferToRent;
            case 'oats':
                const newOwnerAuthorizationToSale = new ownerAuthorizationToSale(data);
                newOwnerAuthorizationToSale.save();
                return newOwnerAuthorizationToSale;
            case 'oatr':
                const newOwnerAuthorizationToRent = new ownerAuthorizationToRent(data);
                newOwnerAuthorizationToRent.save();
                return newOwnerAuthorizationToRent;
            case 'va':
                const newViewerAcknowledgement = new viewerAcknowledgement(data);
                newViewerAcknowledgement.save();
                return newViewerAcknowledgement;
        }

    }

    static async update(id, updates) {

        const saleCaseResponse = await saleCase.findByIdAndUpdate(id, updates);
        return saleCaseResponse;
        
    }

    static async updateForm(type, id, updates) {

        switch (type) {
            case 'otp':
                const offerToPurchaseResponse = await offerToPurchase.findByIdAndUpdate(id, updates);
                return offerToPurchaseResponse;
            case 'otr':
                const offerToRentResponse = await offerToRent.findByIdAndUpdate(id, updates);
                return offerToRentResponse;
            case 'oats':
                const ownerAuthorizationToSaleResponse = await ownerAuthorizationToSale.findByIdAndUpdate(id, updates);
                return ownerAuthorizationToSaleResponse;
            case 'oatr':
                const ownerAuthorizationToRentResponse = await ownerAuthorizationToRent.findByIdAndUpdate(id, updates);
                return ownerAuthorizationToRentResponse;
            case 'va':
                const viewerAcknowledgementResponse = await viewerAcknowledgement.findByIdAndUpdate(id, updates);
                return viewerAcknowledgementResponse;
        }
        
    }

    static async delete(caseId) {

        const saleCaseResponse = await saleCase.findByIdAndDelete(caseId); 
        return saleCaseResponse;
        
    }

    static async deleteForm(caseId, type) {

        const saleCaseResponse = await saleCase.findById(caseId);
        switch (type) {
            case 'otp':
                const offerToPurchaseResponse = await offerToPurchase.findByIdAndDelete(saleCaseResponse.offerToPurchaseForm?._id);
                return offerToPurchaseResponse;
            case 'otr':
                const offerToRentResponse = await offerToRent.findByIdAndDelete(saleCaseResponse.offerToRentForm?._id);
                return offerToRentResponse;
            case 'oats':
                const ownerAuthorizationToSaleResponse = await ownerAuthorizationToSale.findByIdAndDelete(saleCaseResponse.ownerAuthorizationToSaleForm?._id);
                return ownerAuthorizationToSaleResponse;
            case 'oatr':
                const ownerAuthorizationToRentResponse = await ownerAuthorizationToRent.findByIdAndDelete(saleCaseResponse.ownerAuthorizationToRentForm?._id);
                return ownerAuthorizationToRentResponse;
            case 'va':
                const viewerAcknowledgementResponse = await viewerAcknowledgement.findByIdAndDelete(saleCaseResponse.viewerAcknowledgementForm?._id);
                return viewerAcknowledgementResponse;
        }
        
    }

}
