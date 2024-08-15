const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        profileImage: String,
        username: String,
        password: String,
        address: String,
        email: String,
        NRICNo: String,
        bankACNo: String,
        HPNo: String,
        dob: Date,
        sex: {
            type: String,
            enums: ['male', 'female']
        },
        emergencyContact: String,
        jobExperience: [{
            _id: false,
            companyName: String,
            jobTitle: String,
            years: Number,
            salaryInRM: Number
        }],
        nameCard: {
            name: String,
            title: String,
            chineseName: String,
            HPNo: String,
            RenNo: String,
            email: String,
            hasPhoto: Boolean
        },
        interview: {
            date: Date,
            by: String
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            enums: ['fullTime', 'partTime']
        },
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'joinedAt' } // rename default name 'createAt' to 'joinedAt'
    }
);

module.exports = mongoose.model('User', user);
