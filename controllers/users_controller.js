const User = require('../models/user');

const getUsers = async(req, res) => {

    const from = Number(req.query.from) || 0;

    const users = await User
        .find({ _id: { $ne: req.uid } })
        .sort('-online')
        .skip(from);

    res.json({
        ok: true,
        users
    });

}

const updateUser = async(req, res) => {
    const token = req.header('Authorization');
    await User.findByIdAndUpdate(req.uid, req.body);
    const user = await User.findById(req.uid);

    res.json({
        ok: true,
        user,
        token
    })
}

module.exports = {
    getUsers,
    updateUser
}