const loginToken = require("../services/loginToken");
const passwordResetToken = require("../services/passwordResetToken");
const user = require("../services/user");
const notification = require("../services/notification");
const failedLogin = require("../services/failedLogin");
const bcrypt = require('bcrypt');
const sendMail = require("../connect/smtp");
const { MAX_LOGIN_ATTEMPT, LOCK_FOR } = require('../../config.json');
const moment = require('moment');

module.exports = class authController {

    static async mapFormDataToUser(data) {

        const jobExperience = JSON.parse(data.jobExperience).filter(i => {
            return (
                Object.entries(i).length !== 0 &&
                Object.entries(i).filter(j => j[1] !== '').length !== 0
            )
        });

        const formData = {
            profileImage: data.profileImage,
            username: data.username,
            address: data.address,
            dob: data.dob,
            email: data.email,
            password: await bcrypt.hash(process.env.DEFAULT_PASSWORD, parseInt(process.env.SALT_ROUNDS)),
            HPNo: data.HPNo,
            NRICNo: data.NRICNo,
            sex: data.sex,
            bankACNo: data.bankACNo,
            emergencyContact: data.emergencyContact,
            jobExperience,
            nameCard: {
                name: data.nameCardName,
                title: data.nameCardTitle,
                chineseName: data.nameCardChineseName,
                HPNo: data.nameCardHPNo,
                RenNo: data.nameCardRenNo,
                email: data.nameCardEmail,
                hasPhoto: data.nameCardHasPhoto === 'on'
            },
            isAdmin: data.isAdmin === 'on',
            type: data.type,
            interview: {
                date: data.interviewDate,
                by: data.interviewBy
            }
        };
        if (!data.profileImage) delete formData.profileImage;
        return formData;

    }

    static async register(req, res) {
        try {
            
            const { adminId, username, email } = req.body;

            if (!username || !email) {
                return res.status(401).json({ message: 'Full name and email must be entered' });
            }
            const userResponseByEmail = await user.getByEmail(email);
            if (userResponseByEmail) {
                return res.status(401).json({ message: 'User with this email already exist' });
            }
            if (req.file) req.body.profileImage = `/static/user/profileImage/${req.file?.filename}`;
            const data = await authController.mapFormDataToUser(req.body);
            const userResponse = await user.create(data);

            await notification.create({
                sender: adminId,
                receiver: userResponse._id,
                message: `has added you to the team. Welcome 😊`
            });

            const { _id } = await passwordResetToken.create(userResponse._id);

            sendMail(userResponse.email, `Welcome to ${process.env.APP_NAME} 😊`, 'welcome', {
                name: username,
                actionURL: process.env.APP_HOST + '/reset-password?auth=' + _id,
                loginURL: process.env.APP_HOST + '/login',
                email: email,
                defaultPassword: process.env.DEFAULT_PASSWORD
            });

            res.status(200).json({
                message: 'Registration successful',
                user: userResponse
            });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async login(req, res) { // TODO: login wrong password once and got tempo lock
        try {
            
            const { email, password, remember } = req.body;
            
            const userResponse = await user.getByEmail(email);
            const passwordMatch = await bcrypt.compare(password, userResponse?.password || '');
            const isValid = userResponse && passwordMatch;
            let failedLoginResponse = await failedLogin.get(userResponse?._id);
            // if account is not locked anymore
            if (failedLoginResponse?.lockUntil && (failedLoginResponse?.lockUntil < moment.utc().toDate())) {
                await failedLogin.delete(failedLoginResponse.userId);
                failedLoginResponse = null
            }
            if (!isValid) {
                if (userResponse && !passwordMatch) { // email is correct but not password
                    if (!failedLoginResponse) {
                        failedLoginResponse = await failedLogin.create({
                            userId: userResponse._id,
                            loginAttempts: 1,
                            lockUntil: moment().utc().add(LOCK_FOR.VALUE, LOCK_FOR.TYPE).toDate()
                        });
                    } else {
                        if (failedLoginResponse.loginAttempts >= MAX_LOGIN_ATTEMPT) {
                            return res.status(401).json({ error: 'Your account has been temporarily locked. Please try again later' });
                        } else {
                            await failedLogin.update(userResponse._id, {
                                loginAttempts: failedLoginResponse.loginAttempts + 1,
                                lockUntil: moment().utc().add(LOCK_FOR.VALUE, LOCK_FOR.TYPE).toDate()
                            });
                        }
                    }
                }
                return res.status(401).json({ error: 'Incorrect email or password' });
            }

            // if account is still locked
            if (failedLoginResponse?.loginAttempts >= MAX_LOGIN_ATTEMPT &&
                failedLoginResponse?.lockUntil > moment.utc().toDate()) {
                return res.status(401).json({ error: 'Ur account has been temporarily locked. Please try again later' });
            }

            const { _id } = await loginToken.create(userResponse._id, remember);
            if (failedLoginResponse) await failedLogin.delete(failedLoginResponse.userId);
            res.status(200).json({message: 'Login successful', token: _id});
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async forgotPassword(req, res) {
        try {
            
            const { email } = req.body;
            
            const userResponse = await user.getByEmail(email);
            if (!userResponse) {
                return res.status(401).json({ error: 'User with this email does not exist' });
            }

            const { _id } = await passwordResetToken.create(userResponse._id);
            sendMail(email, 'Reset Password', 'resetPassword', {
                name: userResponse.username,
                passwordResetLink: process.env.APP_HOST + '/reset-password?auth=' + _id
            });

            res.status(200).json({
                message: 'Password reset link sent',
                token: _id
            });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async resetPassword(req, res) {
        try {
            
            const { auth, password, confirm } = req.body;

            if (password !== confirm) {
                return res.status(401).json({ error: 'Passwords does not match' });
            }

            if (password.length < 8) {
                return res.status(401).json({ error: 'Password must be at least 8 character long' });
            }
            
            const passwordResetTokenResponse = await passwordResetToken.get(auth);
            if (!passwordResetTokenResponse) {
                return res.status(401).json({ error: 'Invalid token. Make sure you copied the link correctly' });
            }

            const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
            await user.update(passwordResetTokenResponse.userId, { password: hashedPassword });
            await passwordResetToken.delete(passwordResetTokenResponse._id);

            res.status(200).json({ message: 'Password changed' });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async logout(req, res) {
        try {
            
            const { token } = req.query;
            await loginToken.delete(token);
            res.status(200).json({ message: 'Logout successful' });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

}
