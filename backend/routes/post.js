const express = require("express");
const router = express.Router();
const { Post } = require("../models/post.js");
const { Comment } = require("../models/comment.js");
const { authenticate } = require("../util.js");
const { User } = require("../models/user.js");

// Get post
router.get("/:postID", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(404).json({ message: "The post with the given ID was not found" });
    res.status(200).send(post);
});

// Create post
router.post("/", async (req, res) => {
    if (!(await authenticate(req.body.token, req.body.authorId)))
        return res.status(401).json({ success: false, message: "Not authenticated" });
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
    Post.findByIdAndDelete(req.params.postID)
        .then(async (post) => {
            if (!(await authenticate(req.body.token, post.authorId)))
                return res.status(401).json({ success: false, message: "Not authenticated" });
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
    if (!(await authenticate(req.body.token, req.body.authorId)))
        return res.status(401).json({ success: false, message: "Not authenticated" });
    const commentModel = new Comment({
        postId: req.params.postID,
        authorId: req.body.authorId,
        content: req.body.content
    });
    const comment = await commentModel.save();
    // TODO: Add to post comments array
    if (!comment) return res.status(400).send("Comment cannot be created");
    res.send(comment);
});

// Delete comment by comment ID
router.delete("/:postID/comment/:commentID", async (req, res) => {
    Comment.findByIdAndDelete(req.params.commentID)
        .then(async (comment) => {
            if (!(await authenticate(req.body.token, comment.authorId)))
                return res.status(401).json({ success: false, message: "Not authenticated" });
            if (comment)
                return res.status(200).send({ success: true, message: "Comment is deleted." })
            else
                return res.status(404).json({ success: false, message: "Comment not found." });
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err });
        });
});

// Bookmark post by post ID
router.put("/:postID/bookmark", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(404).send("Post cannot be found.");
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    // Add post ID to user's bookmarks
    const user = await User.findById(req.body.userId);
    let bookmarks = user.bookmarks;
    if (!bookmarks.includes(req.params.postID)){
        bookmarks.push(req.params.postID);
        const new_bookmark = User.findByIdAndUpdate(
            req.body.userId,
            {
              bookmarks: bookmarks
            },
            { new: true }
          );
        if (!new_bookmark) return res.status(400).send("Post cannot be bookmarked");
    
        res.status(200).send(new_bookmark);
    }
    res.status(200).send(bookmarks)
});

// Unbookmark post by bookmark ID
router.delete("/:postID/bookmark", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(404).send("Post cannot be found.");
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    // Delete post ID to user's bookmarks
    const user = await User.findById(req.body.userId);
    let bookmarks = user.bookmarks;
    const index = bookmarks.indexOf(req.params.postID);
    if (index > -1) { // only splice array when item is found
        bookmarks.splice(index, 1); // 2nd parameter means remove one item only
    }
    const new_bookmark = User.findByIdAndUpdate(req.body.userId, { bookmarks: bookmarks }, { new: true });
    if (!new_bookmark) return res.status(400).send("Post cannot be unbookmarked");
    res.status(200).send(bookmarks)
});

// Get attendees
router.get("/:postID/rsvp", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(404).send("Post cannot be found.");
    res.status(200).send(post.attendees);
});

// Submit RSVP by post ID
router.post("/:postID/rsvp", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(404).send("Post cannot be found.");
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    // Add user ID to post's attendees
    let attendees = post.attendees;
    if(!attendees.includes(req.body.userId)){
        attendees.push(req.body.userId);
        const new_attendee = Post.findByIdAndUpdate(
            req.params.postID,
            {
              attendees: attendees
            },
            { new: true }
          );
        if (!new_attendee) return res.status(400).send("Error in submitting RSVP");
    }
    res.status(200).send(attendees)

});

// Withdraw RSVP by post ID
router.delete("/:postID/rsvp", async (req, res) => {
    const post = await Post.findById(req.params.postID);
    if (!post) return res.status(404).send("Post cannot be found.");
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    // Remove user ID from post's attendees
    let attendees = post.attendees;
    const index = attendees.indexOf(req.body.userId);
    if (index > -1) { // only splice array when item is found
        attendees.splice(index, 1); // 2nd parameter means remove one item only
    }
    const new_attendee = Post.findByIdAndUpdate(
        req.params.postID,
        {
            attendees: attendees
        },
        { new: true }
        );
    if (!new_attendee) return res.status(400).send("Error in withdrawing RSVP");
    res.status(200).send(attendees)
});

module.exports = router;