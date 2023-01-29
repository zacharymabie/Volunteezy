const { User } = require("../models/user.js");
const { authenticate } = require("../util.js");
const express = require("express");
const router = express.Router();

// Get overall leaderboard
router.get("/", async (req, res) => {
    User.find().sort({'score': 'desc'}).exec(function (err, users) {
        console.log(err);
        console.log(users);
        if (err) return res.status(400).send("Error while loading leaderboard");
        const leaderboard = [];
        for (let i = 0; i < Math.min(10, users.length); i++) {
            const user = users[i];
            leaderboard.push({
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
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Authentication failed" });
    const user = await User.findById(req.body.userId);
    User.find({ zip: user.zip }).sort({'score': 'desc'}).exec(function (err, users) {
        if (err) return res.status(400).send("Error while loading leaderboard");
        const leaderboard = [];
        for (let i = 0; i < Math.min(10, users.length); i++) {
            const user = users[i];
            leaderboard.push({
                name: user.name,
                profilePic: user.profilePic,
                score: user.score
            });
        }
        res.status(200).send(leaderboard);
    });
});

module.exports = router;