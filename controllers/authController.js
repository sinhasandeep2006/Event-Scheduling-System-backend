const User = require('../models/User');

const login = async (req, res) => {
    const { email } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
        user = new User({ email });
        await user.save();
    }

    res.json(user);
};

module.exports = { login };
