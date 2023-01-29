const express = require("express");
const { Post } = require("../models/post.js");
const router = express.Router();
const { Comment } = require("../models/comment.js");

// Get post
router.get("/:postID", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(500).json({ message: "The post with the given ID was not found" });
    res.status(200).send(post);
});

// Create post
router.post("/", async (req, res) => {
    const postModel = new Post({
        authorId: req.body.authorId,
        content: req.body.content,
        timestamp: req.body.timestamp,
        zip: req.body.zip,
        attachment: req.body.attachment
    })
    const post = await postModel.save();
    if (!post) return res.status(400).send("Post cannot be created");
    res.send(post);
});

// Delete post by post ID
router.delete("/:postID", async (req, res) => {

});

// Get individual comment
router.get("/:postID/comment/:commentID", async (req, res) => {
    const comment = await Comment.findById(req.params.postID);
    if (!comment) return res.status(500).json({ message: "The comment with the given ID was not found" });
    res.status(200).send(user);
});

// Get comments under post
router.get("/:postID/comments", async (req, res) => {

});

// Post new comment
router.post("/:postID/comment", async (req, res) => {
        const commentModel = new Comment ({
            postId: req.params.postID,
            authorId: req.params.authorId,
            content: req.params.content
        })
        const comment = await commentModel.save();
    if (!comment) return res.status(400).send("Comment cannot be created");
    res.send(comment);
});

// Delete comment by comment ID
router.delete("/:postID/comment/:commentID", async (req, res) => {

});

// Bookmark post by post ID
router.post("/:postID/bookmark", async (req, res) => {

});

// Unbookmark post by bookmark ID
router.delete("/:postID/bookmark", async (req, res) => {

});

// Get attendees
router.get("/:postID/rsvp", async (req, res) => {

});

// Submit RSVP by post ID
router.post("/:postID/rsvp", async (req, res) => {

});

// Withdraw RSVP by post ID
router.delete("/:postID/rsvp", async (req, res) => {

});

module.exports = router;