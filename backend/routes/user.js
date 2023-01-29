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
        activities: 0,
        score: 0
    });
});

// Get full private details of user
router.get("/:userID", async (req, res) => {
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findById(req.params.userID);
    if (!user) return res.status(404).json({ message: "The user with the given ID was not found" });
    res.status(200).send(user);
});

// Create profile
router.post("/", async (req, res) => {
    // TODO: Check availability of username and email
    // TODO: Type checking of input
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
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.id,
        { name: req.body.name, },
        { new: true }
    );
    if (!user) return res.status(400).send("User cannot be updated.");
    res.send(user);
});

// Set username
router.put("/username", async (req, res) => {
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.id,
        { username: req.body.username },
        { new: true }
    );
    if (!user) return res.status(400).send("User cannot be updated.");
    res.send(user);
});

// Set profile picture
router.put("/avatar", async (req, res) => {
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.id,
        { profilePic: req.body.profilePic, },
        { new: true }
    );
    if (!user) return res.status(400).send("User cannot be updated.");
    res.send(user);
});

// Delete profile picture
router.delete("/avatar", async (req, res) => {
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.id,
        { profilePic: "", },
        { new: true }
    );
    if (!user) return res.status(400).send("User cannot be updated.");
    res.send(user);
});

// Set bio
router.put("/bio", async (req, res) => {
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.id,
        { bio: req.body.bio, },
        { new: true }
    );
    if (!user) return res.status(400).send("User cannot be updated.");
    res.send(user);
});

// Set email
router.put("/email", async (req, res) => {
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.id,
        { email: req.body.email, },
        { new: true }
    );
    if (!user) return res.status(400).send("User cannot be updated.");
    res.send(user);
});

// Set password
router.put("/password", async (req, res) => {
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.id,
        { passwordHash: req.body.password, },
        { new: true }
    );
    if (!user) return res.status(400).send("User cannot be updated.");
    res.send(user);
});

// Set ZIP code
router.put("/zip", async (req, res) => {
    if (!(await authenticate(req.body.token, req.params.userID))) 
        return res.status(401).json({success: false, message: "Not authenticated"});
    const user = await User.findByIdAndUpdate(
        req.body.id,
        { zip: req.body.zip, },
        { new: true }
    );
    if (!user) return res.status(400).send("User cannot be updated.");
    res.send(user);
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