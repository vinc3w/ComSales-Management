const saleCase = require("../services/saleCase");
const notification = require("../services/notification");
const moment = require("moment");

module.exports = class saleCaseController {

    static _mapFormDataToForm(type, formData) {
        switch (type) {
            case 'otp':
                return {
                    purchaserName: formData.purchaserName,
                    propertyAddress: formData.propertyAddress,
                    totalPriceIn: {
                        word: formData.totalPriceInWord,
                        RM: formData.totalPriceInRM
                    },
                    depositSumIn: {
                        word: formData.depositSumInWord,
                        RM: formData.depositSumInRM
                    },
                    payment: {
                        no: formData.paymentNo,
                        dated: formData.paymentDated
                    },
                    termsAndConditions: {
                        loanApplicationPercentage: formData.loanApplicationPercentage,
                        additionalClause: formData.additionalClause,
                    },
                    signature: {
                        purchaser: {
                            1: {
                                name: formData.signaturePurchaser1Name,
                                NRICNo: formData.signaturePurchaser1NRICNo,
                                telNo: formData.signaturePurchaser1TelNo,
                                date: formData.signaturePurchaser1Date
                            },
                            2: {
                                name: formData.signaturePurchaser2Name,
                                NRICNo: formData.signaturePurchaser2NRICNo,
                                telNo: formData.signaturePurchaser2TelNo,
                                date: formData.signaturePurchaser2Date
                            },
                            witness: {
                                name: formData.signaturePurchaserWitnessName,
                                NRICNo: formData.signaturePurchaserWitnessNRICNo,
                                telNo: formData.signaturePurchaserWitnessTelNo,
                                date: formData.signaturePurchaserWitnessDate
                            }
                        },
                        vendor: {
                            1: {
                                name: formData.signatureVendor1Name,
                                NRICNo: formData.signatureVendor1NRICNo,
                                telNo: formData.signatureVendor1TelNo,
                                date: formData.signatureVendor1Date
                            },
                            2: {
                                name: formData.signatureVendor2Name,
                                NRICNo: formData.signatureVendor2NRICNo,
                                telNo: formData.signatureVendor2TelNo,
                                date: formData.signatureVendor2Date
                            },
                            witness: {
                                name: formData.signatureVendorWitnessName,
                                NRICNo: formData.signatureVendorWitnessNRICNo,
                                telNo: formData.signatureVendorWitnessTelNo,
                                date: formData.signatureVendorWitnessDate
                            }
                        }
                    }
                }
            case 'otr':
                return {
                    tenantName: formData.tenantName,
                    propertyAddress: formData.propertyAddress,
                    totalPriceIn: {
                        word: formData.totalPriceInWord,
                        RM: formData.totalPriceInRM
                    },
                    depositSumIn: {
                        word: formData.depositSumInWord,
                        RM: formData.depositSumInRM
                    },
                    payment: {
                        no: formData.paymentNo,
                        bank: formData.paymentBank,
                        dated: formData.paymentDated
                    },
                    termsAndConditions: {
                        advanceRentalFor1MonthPrice: formData.advanceRentalFor1MonthPrice,
                        securityDeposit: {
                            forMonths: formData.securityDepositForMonths,
                            price: formData.securityDepositPrice
                        },
                        utilitiesDepositPrice: formData.utilitiesDepositPrice,
                        accessCard: {
                            pcs: formData.accessCardPcs,
                            carDepositPcs: formData.accessCardCarDepositPcs,
                            price: formData.accessCardPrice
                        },
                        stampingFeeAndDisbursermentOfTenancyAgreementPrice: formData.stampingFeeAndDisbursermentOfTenancyAgreementPrice,
                        totalToBePaidBeforeReleaseOfKeysPrice: formData.totalToBePaidBeforeReleaseOfKeysPrice,
                        lessEarnestDepositPrice: formData.lessEarnestDepositPrice,
                        balancePrice: formData.balancePrice,
                        tenancyCommencementDate: formData.tenancyCommencementDate,
                        periodOfTenancyIn: {
                            word: formData.periodTenancyInWord,
                            year: formData.periodTenancyInYear
                        },
                        optionToRenewTenancyForAnotherIn: {
                            word: formData.optionToRenewTenancyForAnotherInWord,
                            year: formData.optionToRenewTenancyForAnotherInYear
                        },
                        additionalClause: formData.additionalClause,
                    },
                    signature: {
                        purchaser: {
                            1: {
                                name: formData.signaturePurchaser1Name,
                                NRICNo: formData.signaturePurchaser1NRICNo,
                                telNo: formData.signaturePurchaser1TelNo,
                                date: formData.signaturePurchaser1Date
                            },
                            2: {
                                name: formData.signaturePurchaser2Name,
                                NRICNo: formData.signaturePurchaser2NRICNo,
                                telNo: formData.signaturePurchaser2TelNo,
                                date: formData.signaturePurchaser2Date
                            },
                            witness: {
                                name: formData.signaturePurchaserWitnessName,
                                NRICNo: formData.signaturePurchaserWitnessNRICNo,
                                telNo: formData.signaturePurchaserWitnessTelNo,
                                date: formData.signaturePurchaserWitnessDate
                            }
                        },
                        vendor: {
                            1: {
                                name: formData.signatureVendor1Name,
                                NRICNo: formData.signatureVendor1NRICNo,
                                telNo: formData.signatureVendor1TelNo,
                                date: formData.signatureVendor1Date
                            },
                            2: {
                                name: formData.signatureVendor2Name,
                                NRICNo: formData.signatureVendor2NRICNo,
                                telNo: formData.signatureVendor2TelNo,
                                date: formData.signatureVendor2Date
                            },
                            witness: {
                                name: formData.signatureVendorWitnessName,
                                NRICNo: formData.signatureVendorWitnessNRICNo,
                                telNo: formData.signatureVendorWitnessTelNo,
                                date: formData.signatureVendorWitnessDate
                            }
                        }
                    }
                }
            case 'oats':
                return {
                    date: formData.date,
                    propertyAddress: formData.propertyAddress,
                    propertyPriceIn: {
                        word: formData.propertyPriceInWord,
                        RM: formData.propertyPriceInRM
                    },
                    landAndBuildingFee: formData.landAndBuildingFee,
                    commissionFee: {
                        total: formData.commissionFeeTotal,
                        totalWithTax: formData.commissionFeeTotalWithTax
                    },
                    appointmentValidity: {
                        from: formData.appointmentValidityFrom,
                        to: formData.appointmentValidityTo
                    },
                    signature: {
                        owner1: {
                            name: formData.signatureOwner1Name,
                            NRICNo: formData.signatureOwner1NRICNo,
                            telNo: formData.signatureOwner1TelNo,
                            date: formData.signatureOwner1Date
                        },
                        owner2: {
                            name: formData.signatureOwner2Name,
                            NRICNo: formData.signatureOwner2NRICNo,
                            telNo: formData.signatureOwner2TelNo,
                            date: formData.signatureOwner2Date
                        },
                        witness: {
                            name: formData.signatureWitnessName,
                            NRICNo: formData.signatureWitnessNRICNo,
                            telNo: formData.signatureWitnessTelNo,
                            date: formData.signatureWitnessDate
                        }
                    }
                }
            case 'oatr':
                return {
                    date: formData.date,
                    propertyAddress: formData.propertyAddress,
                    bookingFeeIn: {
                        word: formData.bookingFeeInWord,
                        RM: formData.bookingFeeInRM
                    },
                    commissionFee: {
                        month: formData.commissionFeeMonth,
                        total: formData.commissionFeeTotal,
                    },
                    appointmentValidity: {
                        from: formData.appointmentValidityFrom,
                        to: formData.appointmentValidityTo
                    },
                    signature: {
                        owner1: {
                            name: formData.signatureOwner1Name,
                            NRICNo: formData.signatureOwner1NRICNo,
                            telNo: formData.signatureOwner1TelNo,
                            date: formData.signatureOwner1Date
                        },
                        owner2: {
                            name: formData.signatureOwner2Name,
                            NRICNo: formData.signatureOwner2NRICNo,
                            telNo: formData.signatureOwner2TelNo,
                            date: formData.signatureOwner2Date
                        },
                        witness: {
                            name: formData.signatureWitnessName,
                            NRICNo: formData.signatureWitnessNRICNo,
                            telNo: formData.signatureWitnessTelNo,
                            date: formData.signatureWitnessDate
                        }
                    }
                }
            case 'va':
                return formData;
        }
    }

    static _mapFormDataToSaleCase(type, userId, username, formData) {
        let data;
        switch(type) {
            case 'otp':
                data = {
                    agent: userId,
                    buyerName: [
                        formData.signature?.purchaser['1']?.name,
                        formData.signature?.purchaser['2']?.name,
                    ].filter(i => i).join(', '),
                    property: {
                        type: 'sale',
                        address: formData.propertyAddress
                    },
                    offerToPurchaseForm: formData._id 
                }
                break;
            case 'otr':
                data = {
                    agent: userId,
                    buyerName: [
                        formData.signature?.purchaser['1']?.name,
                        formData.signature?.purchaser['2']?.name,
                    ].filter(i => i).join(', '),
                    property: {
                        type: 'rent',
                        address: formData.propertyAddress
                    },
                    offerToRentForm: formData._id
                }
                break;
            case 'oats':
                data = {
                    agent: userId,
                    ownerName: [
                        formData.signature?.owner1?.name,
                        formData.signature?.owner2?.name,
                    ].filter(i => i).join(', '),
                    property: {
                        type: 'sale',
                        address: formData.propertyAddress
                    },
                    commission: {
                        amount: formData.commissionFee?.total,
                        amountWithTax: formData.commissionFee?.totalWithTax
                    },
                    ownerAuthorizationToSaleForm: formData._id
                }
                break;
            case 'oatr':
                data = {
                    agent: userId,
                    ownerName: [
                        formData.signature?.owner1?.name,
                        formData.signature?.owner2?.name,
                    ].filter(i => i).join(', '),
                    property: {
                        type: 'rent',
                        address: formData.propertyAddress
                    },
                    commission: {
                        amount: formData.commissionFee?.total,
                        amountWithTax: formData.commissionFee?.totalWithTax
                    },
                    ownerAuthorizationToRentForm: formData._id
                }
                break;
            case 'va':
                data =  {
                    agent: userId,
                    viewerAcknowledgementForm: formData._id
                }
        }
        if (username) data.agentName = username;
        return data;
    }

    static formTypeAbbrToFull(formType) {

        switch (formType) {
            case 'otp':
                return 'Offer to Purchase';
            case 'otr':
                return 'Offer to Rent';
            case 'oats':
                return 'Owner Authorization to Purchase';
            case 'oatr':
                return 'Owner Authorization to Rent';
            case 'va':
                return 'Viewer Acknowledgement';
        }

    }

    static async get(req, res) {
        try {

            const { caseId, agentId, sort, order, status, propertyType, propertyAddress, agentName, ownerName, buyerName, dateOpened, dateClosed, minCommission, maxCommission, minCommissionWithTax, maxCommissionWithTax, page } = req.query;
            
            const filter = {};
            if (caseId) filter._id = caseId;
            if (agentId) filter.agent = { _id: agentId };
            if (status) filter.status = status;
            if (propertyType) filter['property.type'] = propertyType;
            if (propertyAddress) filter['property.address'] = { $regex: new RegExp(propertyAddress, 'i') };
            if (agentName) filter.agentName = { $regex: new RegExp(agentName, 'i') };
            if (ownerName) filter.ownerName = { $regex: new RegExp(ownerName, 'i') };
            if (buyerName) filter.buyerName = { $regex: new RegExp(buyerName, 'i') };
            if (dateOpened) filter.dateOpened = moment.utc(dateOpened).format('L');
            if (dateClosed) filter.dateClosed = moment.utc(dateClosed).format('L');
            if (minCommission && maxCommission) filter['commission.amount'] = { $gt: minCommission, $lt: maxCommission };
            else if (minCommission) filter['commission.amount'] = { $gt: minCommission };
            else if (maxCommission) filter['commission.amount'] = { $lt: maxCommission };
            if (minCommissionWithTax && maxCommissionWithTax) filter['commission.amountWithTax'] = { $gt: minCommissionWithTax, $lt: maxCommissionWithTax };
            else if (minCommissionWithTax) filter['commission.amountWithTax'] = { $gt: minCommissionWithTax };
            else if (maxCommissionWithTax) filter['commission.amountWithTax'] = { $lt: maxCommissionWithTax };

            const saleCases = await saleCase.get(filter, sort ?? '_id', order === 'DESC' ? -1 : 1, page);
            const count = await saleCase.getAllCount();
            res.status(200).json({ saleCases, count });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async getForm(req, res) {
        try {

            const { formType, caseId } = req.query;

            const saleCaseResponse = await saleCase.getById(caseId);

            let formData;
            switch (formType) {
                case 'otp':
                    formData = await saleCase.getForm(formType, saleCaseResponse.offerToPurchaseForm?._id);
                    break;
                case 'otr':
                    formData = await saleCase.getForm(formType, saleCaseResponse.offerToRentForm?._id);
                    break;
                case 'oats':
                    formData = await saleCase.getForm(formType, saleCaseResponse.ownerAuthorizationToSaleForm?._id);
                    break;
                case 'oatr':
                    formData = await saleCase.getForm(formType, saleCaseResponse.ownerAuthorizationToRentForm?._id);
                    break;
                case 'va':
                    formData = await saleCase.getForm(formType, saleCaseResponse.viewerAcknowledgementForm?._id);
            }
            res.status(200).json({ message: 'successful', formData: formData ?? {} });
            
        } catch (error) {
            
            res.status(500).json({ error: error.message });
            
        }
    }

    static async create(req, res) {
        try {

            const { formType, formData, userId, username } = req.body;

            const newForm = await saleCase.createForm(formType, saleCaseController._mapFormDataToForm(formType, formData));
            const newSaleCase = await saleCase.create(saleCaseController._mapFormDataToSaleCase(formType, userId, username, newForm));

            res.status(200).json({ message: 'form create successful', saleCase: newSaleCase });
            
        } catch (error) {
            
            res.status(500).json({ error: error.message });
            
        }
    }

    static async update(req, res) {
        try {

            const { userId, caseId, updates } = req.body;

            const saleCaseResponse = await saleCase.update(caseId, updates);

            let message = `as updated your case "${saleCaseResponse.name || saleCaseResponse._id}"`;
            if (updates.status) {
                message = `as updated your case "${saleCaseResponse.name || saleCaseResponse._id}" status to ${updates.status}`;
            }
            if (updates.status) {
                message = `as renamed your case "${saleCaseResponse.name || saleCaseResponse._id}" to ${updates.name}`;
            }

            if (saleCaseResponse.agent.valueOf() !== userId) {
                await notification.create({
                    sender: userId,
                    receiver: saleCaseResponse.agent,
                    message
                });
            }

            res.status(200).json({ message: 'Case update successful', saleCase: saleCaseResponse });
            
        } catch (error) {
            res.status(500).json({ error: error.message });
            
        }
    }

    static async updateForm(req, res) {
        try {

            const { userId, formType, formData, caseId } = req.body;

            const saleCaseResponse = await saleCase.getById(caseId);
            let form;
            switch (formType) {
                case 'otp':
                    form = saleCaseResponse.offerToPurchaseForm ?
                           await saleCase.updateForm(formType, saleCaseResponse.offerToPurchaseForm, saleCaseController._mapFormDataToForm(formType, formData)) :
                           await saleCase.createForm(formType, saleCaseController._mapFormDataToForm(formType, formData));
                    break;
                case 'otr':
                    form = saleCaseResponse.offerToRentForm ?
                           await saleCase.updateForm(formType, saleCaseResponse.offerToRentForm, saleCaseController._mapFormDataToForm(formType, formData)) :
                           await saleCase.createForm(formType, saleCaseController._mapFormDataToForm(formType, formData));
                    break;
                case 'oats':
                    form = saleCaseResponse.ownerAuthorizationToSaleForm ?
                           await saleCase.updateForm(formType, saleCaseResponse.ownerAuthorizationToSaleForm, saleCaseController._mapFormDataToForm(formType, formData)) :
                           await saleCase.createForm(formType, saleCaseController._mapFormDataToForm(formType, formData));
                    break;
                case 'oatr':
                    form = saleCaseResponse.ownerAuthorizationToRentForm ?
                           await saleCase.updateForm(formType, saleCaseResponse.ownerAuthorizationToRentForm, saleCaseController._mapFormDataToForm(formType, formData)) :
                           await saleCase.createForm(formType, saleCaseController._mapFormDataToForm(formType, formData));
                    break;
                case 'va':
                    form = saleCaseResponse.viewerAcknowledgementForm ?
                           await saleCase.updateForm(formType, saleCaseResponse.viewerAcknowledgementForm, saleCaseController._mapFormDataToForm(formType, formData)) :
                           await saleCase.createForm(formType, saleCaseController._mapFormDataToForm(formType, formData));
            }

            if (saleCaseResponse.agent.valueOf() !== userId) {
                await notification.create({
                    sender: userId,
                    receiver: saleCaseResponse.agent,
                    message: `has updated your case "${saleCaseResponse.name || saleCaseResponse._id}" ${saleCaseController.formTypeAbbrToFull(formType)} form`
                });
            }

            res.status(200).json({ message: 'form update successful' });
            
        } catch (error) {
            
            console.log(error)
            res.status(500).json({ error: error.message });
            
        }
    }

    static async delete(req, res) {
        try {

            const { userId, caseId } = req.query;

            await saleCase.deleteForm(caseId, 'oats');
            await saleCase.deleteForm(caseId, 'oatr');
            await saleCase.deleteForm(caseId, 'ots');
            await saleCase.deleteForm(caseId, 'otr');
            await saleCase.deleteForm(caseId, 'va');
            const saleCaseResponse = await saleCase.delete(caseId);

            if (saleCaseResponse.agent.valueOf() !== userId) {
                await notification.create({
                    sender: userId,
                    receiver: saleCaseResponse.agent,
                    message: `as deleted your case "${saleCaseResponse.name || saleCaseResponse._id}"`
                });
            }

            res.status(200).json({ message: 'sale case delete successful' });
            
        } catch (error) {
            
            res.status(500).json({ error: error.message });
            
        }
    }

    static async deleteForm(req, res) {
        try {

            const { formType, caseId } = req.query;

            await saleCase.deleteForm(caseId, formType);
            switch (formType) {
                case 'otp':
                    await saleCase.update(caseId, { offerToPurchaseForm: null });
                    break;
                case 'otr':
                    await saleCase.update(caseId, { offerToRentForm: null });
                    break;
                case 'oats':
                    await saleCase.update(caseId, { ownerAuthorizationToSaleForm: null });
                    break;
                case 'oatr':
                    await saleCase.update(caseId, { ownerAuthorizationToRentForm: null });
                    break;
                case 'va':
                    await saleCase.update(caseId, { viewerAcknowledgementForm: null });
            }

            res.status(200).json({ message: 'form delete successful' });
            
        } catch (error) {
            
            res.status(500).json({ error: error.message });
            
        }
    }

}
