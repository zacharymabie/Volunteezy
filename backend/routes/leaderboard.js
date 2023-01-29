const express = require("express");
const router = express.Router();

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