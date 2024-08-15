const passwordResetToken = require("../models/passwordResetToken");

module.exports = class passwordResetTokenService {

    static async create(userId) {

        const newPasswordResetToken = new passwordResetToken({ userId });
        newPasswordResetToken.save();
        return newPasswordResetToken;

    }

    static async get(id) {

        const passwordResetTokenResponse = await passwordResetToken.findById(id);
        return passwordResetTokenResponse;
            
    }

    static async delete(id) {

        const passwordResetTokenResponse = await passwordResetToken.findByIdAndDelete(id);
        return passwordResetTokenResponse;
            
    }

}
