const notification = require('../models/notification');
const { LIMIT_COUNT } = require('../../config.json');

module.exports = class notificationService {

    static async getAllCount(filter) {

        const count = await notification.countDocuments(filter);
        return count;

    }

    static async getAll(search, page=1) {

        const notificationResponse = await notification.find(search, null, {
            skip: (page - 1) * LIMIT_COUNT,
            limit: LIMIT_COUNT
        })
            .populate('sender')
            .sort([['createdAt', 'desc']])
            .exec();
        return notificationResponse;
        
    }

    static async create(data) {

        const newNotification = new notification(data);
        newNotification.save();
        return newNotification;
        
    }

    static async delete(id) {

        const notificationResponse = await notification.findOneAndDelete({ _id: id });
        return notificationResponse;
        
    }

    static async deleteAll(userId) {

        const notificationResponse = await notification.deleteMany({ _receiver: userId });
        return notificationResponse;
        
    }

}
