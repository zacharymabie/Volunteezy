const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true
  },
  profilePic: {
    type: String,
    default: "", // TODO: Set default profile picture path here
  },
  bio: {
    type: String,
    default: "",
  },
  rank: {
    type: String,
    default: "New VoluntUser",
  },
  posts: {
    type: Array,
    default: []
  },
  comments: {
    type: Array,
    default: []
  },
  bookmarks: {
    type: Array,
    default: []
  }
});

exports.User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;