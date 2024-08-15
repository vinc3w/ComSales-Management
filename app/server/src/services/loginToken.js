const loginToken = require("../models/loginToken");

module.exports = class loginTokenService {

    static async create(userId, remember) {

        const newLoginToken = new loginToken({
            userId,
            expiresAt: remember ? null : Date.now()
        });
        newLoginToken.save();
        return newLoginToken;
            
    }

    static async get(id) {

        const loginTokenResponse = await loginToken.findOne({ _id: id });
        return loginTokenResponse;
            
    }

    static async delete(id) {

        const newLoginToken = await loginToken.findByIdAndDelete(id);
        return newLoginToken;
            
    }

}
