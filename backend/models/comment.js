const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  id: { // Comment ID
    type: Number,
    required: true
  },
  postId: { // The post that the comment is under
    type: Number,
    required: true
  },
  authorId: { // User ID of comment author
    type: Number,
    required: true
  },
  content: { // Text content of the comment
    type: String,
    required: true,
  },
  timestamp: { // Time comment posted
    type: Date,
    default: Date.now,
  },
});

exports.Comment = mongoose.model("Comment", commentSchema);
exports.commentSchema = commentSchema;