const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{
        date:{
            type: Date,
            default: Date.now
        }
    }]},
    {timestamps: true},
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;