const mongoose = require('mongoose');

async function connect() {

    try {

        await mongoose.connect(process.env.DATABASE_URI);
        console.log('Connected to db!');
        
    } catch (error) {

        console.error(error);
        
    }

}

connect();

module.exports = mongoose;
