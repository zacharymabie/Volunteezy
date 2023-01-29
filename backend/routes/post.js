const express = require("express");
const router = express.Router();

// Get post
router.get("/:postID", async (req, res) => {
    
});

// Create post
router.post("/", async (req, res) => {

});

// Delete post by post ID
router.delete("/:postID", async (req, res) => {

});

// Get individual comment
router.get("/:postID/comment/:commentID", async (req, res) => {

});

// Get comments under post
router.get("/:postID/comments", async (req, res) => {

});

// Post new comment
router.post("/:postID/comment", async (req, res) => {

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