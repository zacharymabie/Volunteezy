const express = require("express");
const router = express.Router();
const { User } = require("../models/user.js");

// Get public details of profile
router.get("/:userID/profile", async (req, res) => {
    const user = await User.findById(req.params.userID);
    if (!user) return res.status(500).json({ message: "The user with the given ID was not found" });
    res.status(200).send({
        id: user._id,
        name: user.name,
        username: user.username,
        profilePic: user.profilePic,
        bio: user.bio,
        posts: user.posts,
        verified: user.verified,
        activities: 0,
        score: 0
    });
});

// Get full private details of user
router.get("/:userID", async (req, res) => {
    const user = await User.findById(req.params.userID);
    if (!user) return res.status(500).json({ message: "The user with the given ID was not found" });
    res.status(200).send(user);
});

// Create profile
router.post("/", async (req, res) => {
    const userModel = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.password,
        zip: req.body.zip
    });
    const user = await userModel.save();
    if (!user) return res.status(400).send("User cannot be created");
    res.send(user);
});

// Set name
router.put("/name", async (req, res) => {

});

// Set username
router.put("/username", async (req, res) => {

});

// Set profile picture
router.put("/avatar", async (req, res) => {

});

// Delete profile picture
router.delete("/avatar", async (req, res) => {

});

// Set bio
router.put("/bio", async (req, res) => {

});

// Set email
router.put("/email", async (req, res) => {

});

module.exports = router;