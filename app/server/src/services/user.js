const user = require('../models/user');
const { LIMIT_COUNT } = require('../../config.json');

module.exports = class userService {

    static async getAllCount() {

        const count = await user.countDocuments();
        return count;

    }

    static async getById(id) {

        const userResponse = await user.findById(id);
        return userResponse;

    }

    static async getByEmail(email) {

        const userResponse = await user.findOne({ email });
        return userResponse;
            
    }

    static async getAll(search, page) {

        const usersResponse = await user.find(search, null, {
            skip: (page - 1) * LIMIT_COUNT,
            limit: LIMIT_COUNT
        });
        return usersResponse;
        
    }

    static async create(data) {

        const newUser = new user(data);
        newUser.save();
        return newUser;
        
    }

    static async update(id, updates) {

        const userResponse = await user.findByIdAndUpdate(id, updates);
        return userResponse;
        
    }

    static async delete(id) {

        const userResponse = await user.findByIdAndDelete(id);
        return userResponse;

    }

}
