const express = require("express");
const { Post } = require("../models/post.js");
const router = express.Router();
const { Comment } = require("../models/comment.js");

// Get post
router.get("/:postID", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(404).json({ message: "The post with the given ID was not found" });
    res.status(200).send(post);
});

// Create post
router.post("/", async (req, res) => {
    // TODO: Authentication
    const postModel = new Post({
        authorId: req.body.authorId,
        content: req.body.content,
        zip: req.body.zip,
        attachment: req.body.attachment
    })
    const post = await postModel.save();
    if (!post) return res.status(400).send("Post cannot be created");
    res.send(post);
});

// Delete post by post ID
router.delete("/:postID", async (req, res) => {
    // TODO: Authentication
    Post.findByIdAndDelete(req.params.postID)
        .then(async (post) => {
            if (post)
                return res.status(200).send({ success: true, message: "Post is deleted." })
            else
                return res.status(404).json({ success: false, message: "Post not found." });
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err });
        });
});

// Get individual comment
router.get("/:postID/comment/:commentID", async (req, res) => {
    const comment = await Comment.findById(req.params.commentID);
    if (!comment) return res.status(404).json({ message: "The comment with the given ID was not found" });
    res.status(200).send(comment);
});

// Get comments under post
router.get("/:postID/comments", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(404).json({ message: "The post with the given ID was not found" });
    res.status(200).send(post.comments);
});

// Post new comment
router.post("/:postID/comment", async (req, res) => {
    // TODO: Authentication
    const commentModel = new Comment({
        postId: req.params.postID,
        authorId: req.body.authorId,
        content: req.body.content
    })
    const comment = await commentModel.save();
    // TODO: Add to post comments array
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