const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post("", (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        nationality: req.body.nationality
    });

    user.save().then(createdUser => {
        res.status(200).json({
            message: "User created successfully",
            userId: createdUser._id
        });
    });
});

module.exports = router