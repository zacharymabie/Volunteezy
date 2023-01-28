const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  authorId: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

exports.Comment = mongoose.model("Comment", commentSchema);
exports.commentSchema = commentSchema;