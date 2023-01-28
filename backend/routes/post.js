const express = require("express");
const router = express.Router();

// Get post
router.get("/:postID", async (req, res) => {

});

// Create post
router.post("/", async (req, res) => {
    res.status(401).send();
});

// Delete post by post ID
router.delete("/:postID", async (req, res) => {
    res.status(401).send();
});

// Post new comment
router.post("/:postID/comment", async (req, res) => {
    res.status(401).send();
});

// Delete comment by comment ID
router.delete("/:postID/comment/:commentID", async (req, res) => {
    res.status(401).send();
});

// Bookmark post by post ID
router.post("/:postID/bookmark", async (req, res) => {
    res.status(401).send();
});

// Unbookmark post by bookmark ID
router.delete("/:postID/bookmark", async (req, res) => {
    res.status(401).send();
});

// RSVP by post ID
router.post("/:postID/rsvp", async (req, res) => {
    res.status(401).send();
});

// Withdraw RSVP by post ID
router.delete("/:postID/rsvp", async (req, res) => {
    res.status(401).send();
});

module.exports = router;