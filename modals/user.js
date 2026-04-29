const mongoose = require('mongoose');

// Schema = structure of data
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }); // createdAt, updatedAt auto add hoga

// Model = schema ka MongoDB se connection
const User = mongoose.model('User', userSchema);

module.exports = User;