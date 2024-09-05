
const User = require('../models/User');
const Schedule = require('../models/Schedule');

const getAvailability = async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.json(user.availability);
};

const scheduleSession = async (req, res) => {
    const { userId, start, end, duration, attendees } = req.body;

    const newSession = new Schedule({
        user: userId,
        scheduledSlots: [{ start, end, attendees }],
        duration
    });

    await newSession.save();
    res.json(newSession);
};

module.exports = { getAvailability, scheduleSession };
