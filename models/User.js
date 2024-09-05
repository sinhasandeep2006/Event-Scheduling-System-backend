const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    availability: [{
        start: { type: Date, required: true },
        end: { type: Date, required: true },
        duration: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('User', UserSchema);
