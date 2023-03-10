const express = require("express");
const router = express.Router();
const { User } = require("../models/user.js");
const { authenticate } = require("../util.js");

// Get public details of profile
router.get("/:userID/profile", async (req, res) => {
    const user = await User.findById(req.params.userID);
    if (!user) return res.status(404).json({ message: "The user with the given ID was not found" });
    res.status(200).send({
        id: user._id,
        name: user.name,
        username: user.username,
        profilePic: user.profilePic,
        bio: user.bio,
        posts: user.posts,
        verified: user.verified,
        score: user.score
    });
});

// Get full private details of user
router.get("/:userID", async (req, res) => {
    if (!(await authenticate(req.query.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findById(req.params.userID);
    if (!user) return res.status(404).json({ message: "The user with the given ID was not found" });
    res.status(200).send(user);
});

// Create profile
router.post("/", async (req, res) => {
    const findUsername = await User.find({username: req.body.username});
    if (findUsername.length > 0) return res.status(400).send("Username already taken");
    const findEmail = await User.find({email: req.body.email});
    if (findEmail.length > 0) return res.status(400).send("Email already in use");
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

// Edit profile
router.put("/edit", async (req, res) => {
    if (!(await authenticate(req.body.token, req.body.userId))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.userId,
        {
            name: req.body.name,
            username: req.body.username,
            profilePic: req.body.profilePic,
            bio: req.body.bio,
            email: req.body.email,
            passwordHash: req.body.password,
            zip: req.body.zip,
        },
        { new: true }
    );
    if (!user) return res.status(400).send("Error occured while editing profile");
    res.send(user)
});

// Login
router.post("/login", async (req, res) => {
    // TODO: Make an actual login and token system
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("Email not found");
    if (req.body.password === user.passwordHash)
        res.status(200).send({ user: user.email, token: req.body.password });
    else
        res.status(401).send("Wrong password");
});

module.exports = router;