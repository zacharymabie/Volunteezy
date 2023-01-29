const express = require("express");
const router = express.Router();

// Get public details of profile
router.get("/:userID/profile", async (req, res) => {
    res.status(200).send({
        id: 1,
        name: "Brian Eide",
        username: "brianeide",
        profilePic: "https://avatars.githubusercontent.com/u/80086776",
        bio: "I love making volunteering easy",
        posts: [

        ],
        verified: true,
        activities: 2,
        score: 1000
    });
});

// Get full private details of user
router.get("/:userID", async (req, res) => {

});

// Set name
router.post("/name", async (req, res) => {

});

// Set username
router.post("/username", async (req, res) => {

});

// Set profile picture
router.post("/avatar", async (req, res) => {

});

// Delete profile picture
router.delete("/avatar", async (req, res) => {

});

// Set bio
router.post("/bio", async (req, res) => {

});

// Set email
router.post("/email", async (req, res) => {

});

module.exports = router;