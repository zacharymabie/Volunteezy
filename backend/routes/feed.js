const express = require("express");
const router = express.Router();
const { Post } = require("../models/post.js");
const { User } = require("../models/user.js");
const { authenticate } = require("../util.js");

// Get feed
router.get("/", async (req, res) => {
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Authentication failed" });
    const user = await User.findById(req.body.userId);
    Post.find({ zip: user.zip }).sort({'timestamp': 'desc'}).exec(function (err, posts) {
        console.log(err);
        console.log(posts);
        if (err) return res.status(400).send("Error while loading feed");
        const postList = [];
        for (let i = 0; i < Math.min(5, posts.length); i++) {
            postList.push(posts[i]);
        }
        res.status(200).send(postList);
    });
});

module.exports = router;