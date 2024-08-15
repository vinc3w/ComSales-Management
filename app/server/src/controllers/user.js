const user = require('../services/user');
const loginToken = require('../services/loginToken');
const notification = require("../services/notification");
const fs = require('fs');
const path = require('node:path');

module.exports = class userController {

    static mapFormDataToUser(data) {

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

    static async get(req, res) {
        try {

            const { token, userId } = req.query;

            if (token) {
            
                const loginTokenResponse = await loginToken.get(token);
                if (!loginTokenResponse) {
                    return res.status(401).json({ error: 'Token invalid' });
                }
                
                const userResponse = await user.getById(loginTokenResponse.userId);
                userResponse.password = undefined;
                return res.status(200).json({ user: userResponse });

            }
                
            const userResponse = await user.getById(userId);
            if (userResponse) userResponse.password = undefined;
            return res.status(200).json({ user: userResponse });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async getAll(req, res) {
        try {

            const { page, username, email, isAdmin, NRICNo } = req.query;
            
            const filter = {};
            if (username) filter.username = { $regex: new RegExp(username, 'i') };
            if (email) filter.email = { $regex: new RegExp(email, 'i') };
            if (isAdmin !== undefined) filter.isAdmin = isAdmin;
            if (NRICNo) filter.NRICNo = { $regex: new RegExp(NRICNo, 'i') };
            const usersResponse = await user.getAll(filter, page);
            usersResponse.forEach(i => i.password = undefined);
            const count = await user.getAllCount();
            res.status(200).json({ users: usersResponse, count });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }


    static async update(req, res) {
        try {

            const { adminId, userId, username, email } = req.body;

            if (!username || !email) {
                return res.status(401).json({ message: 'Full name and email must be entered' });
            }
            const userResponseByEmail = await user.getByEmail(email);
            if (userResponseByEmail && userResponseByEmail._id.toString() !== userId) {
                return res.status(401).json({ message: 'User with this email already exist' });
            }
            const userResponse = await user.getById(userId);
            if (req.file) req.body.profileImage = `/static/user/profileImage/${req.file?.filename}`;

            if (req.file && userResponse.profileImage) {
                const p = path.join(__dirname, '../../public', ...userResponse.profileImage.split('/').slice(2))
                fs.unlinkSync(p);
            }

            await user.update(userId, userController.mapFormDataToUser(req.body));
            if (userResponse._id.valueOf() !== adminId) {
                await notification.create({
                    sender: adminId,
                    receiver: userId,
                    message: `has updated your profile`
                });
            }

            res.status(200).json({ user: userResponse });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async delete(req, res) {
        try {

            const { userId } = req.query;

            const userResponse = await user.getById(userId);
            if (userResponse.profileImage) {
                const p = path.join(__dirname, '../../public', ...userResponse.profileImage.split('/').slice(2))
                fs.unlinkSync(p);
            }

            await user.delete(userId);
            res.status(200).json({ user: userResponse });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

}
