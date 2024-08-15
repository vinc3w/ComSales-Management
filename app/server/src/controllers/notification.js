const notification = require("../services/notification");

module.exports = class notificationController {

    static async getAll(req, res) {
        try {
            
            const { userId, page } = req.query;

            const notificationsResponse = await notification.getAll({ receiver: userId }, page);
            const count = await notification.getAllCount(userId ? { receiver: userId } : {});
            res.status(200).json({ notifications: notificationsResponse, count });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async happyBirthday(req, res) {
        try {

            const { senderId, receiverId } = req.body;

            const notificationResponse = await notification.create({
                sender: senderId,
                receiver: receiverId,
                message: 'wish you a happy birthday 🎂'
            });
            res.status(200).json({ notifications: notificationResponse });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async create(req, res) {
        try {
            
            const { data } = req.body;

            const notificationsResponse = await notification.create(data);
            res.status(200).json({ notifications: notificationsResponse });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async delete(req, res) {
        try {
            
            const { id } = req.query;

            const notificationsResponse = await notification.delete(id);
            res.status(200).json({ message: 'Delete successfull', notifications: notificationsResponse });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

    static async deleteAll(req, res) {
        try {
            
            const { userId } = req.query;

            const notificationsResponse = await notification.deleteAll(userId);
            res.status(200).json({ message: 'Delete all successful' });
            
        } catch (error) {

            res.status(500).json({ error: error.message });
            
        }
    }

}
