const mongoose = require('mongoose');

async function connectDB(url) {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDB};