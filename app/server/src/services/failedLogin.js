const failedLogin = require('../models/failedLogin');

module.exports = class failedloginService {

    static async get(userId) {

        const failedLoginResponse = await failedLogin.findOne({ userId });
        return failedLoginResponse;
        
    }

    static async create(data) {

        const newFailedLogin = new failedLogin(data);
        await newFailedLogin.save();
        return newFailedLogin;
        
    }

    static async update(userId, updates) {

        const failedLoginResponse = await failedLogin.findOneAndUpdate({ userId }, updates);
        return failedLoginResponse;
        
    }

    static async delete(userId) {

        const failedLoginResponse = await failedLogin.findOneAndDelete({ userId });
        return failedLoginResponse;
        
    }

}
