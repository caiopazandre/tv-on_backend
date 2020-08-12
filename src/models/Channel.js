const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    logo: {
        //url of a storege server
        type: String,
    },
    language: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Channel', ChannelSchema);