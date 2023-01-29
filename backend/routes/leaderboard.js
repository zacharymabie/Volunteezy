const express = require("express");
const router = express.Router();

// Get overall leaderboard
router.get("/", async (req, res) => {
    res.status(200).send([
        {
            name: "Brian",
            profilePic: "",
            score: 1000
        },
        {
            name: "Zach",
            profilePic: "",
            score: 1000
        },
        {
            name: "Raji",
            profilePic: "",
            score: 1000
        }
    ]);
});

// Get local leaderboard
router.get("/local", async (req, res) => {
    res.status(200).send([
        {
            name: "Brian",
            profilePic: "",
            score: 1000
        },
        {
            name: "Zach",
            profilePic: "",
            score: 1000
        },
        {
            name: "Raji",
            profilePic: "",
            score: 1000
        }
    ]);
});

module.exports = router;