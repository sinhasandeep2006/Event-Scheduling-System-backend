const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    scheduledSlots: [{
        start: { type: Date, required: true },
        end: { type: Date, required: true },
        attendees: [{ name: String, email: String }]
    }],
    duration: { type: Number, required: true }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
