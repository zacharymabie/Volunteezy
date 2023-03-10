const { User } = require("../models/user.js");
const { authenticate } = require("../util.js");
const express = require("express");
const router = express.Router();

// Get overall leaderboard
router.get("/", async (req, res) => {
    User.find().sort({'score': 'desc'}).exec(function (err, users) {
        if (err) return res.status(400).send("Error while loading leaderboard");
        const leaderboard = [];
        for (let i = 0; i < Math.min(10, users.length); i++) {
            const user = users[i];
            leaderboard.push({
                userId: user._id,
                name: user.name,
                profilePic: user.profilePic,
                score: user.score
            });
        }
        res.status(200).send(leaderboard);
    });
});

// Get local leaderboard
router.get("/local", async (req, res) => {
    if (!(await authenticate(req.query.token, req.query.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Authentication failed" });
    const user = await User.findById(req.query.userId);
    User.find({ zip: user.zip }).sort({'score': 'desc'}).exec(function (err, users) {
        if (err) return res.status(400).send("Error while loading leaderboard");
        const leaderboard = [];
        for (let i = 0; i < Math.min(10, users.length); i++) {
            const user = users[i];
            leaderboard.push({
                userId: user._id,
                name: user.name,
                profilePic: user.profilePic,
                score: user.score
            });
        }
        res.status(200).send(leaderboard);
    });
});

module.exports = router;