const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { // User's username
    type: String,
    required: true,
  },
  name: { // User's full name
    type: String,
    required: true,
  },
  email: { // User's email
    type: String,
    required: true,
  },
  passwordHash: { // User's password hash
    type: String,
    required: true,
  },
  zip: { // User's ZIP code
    type: Number,
    required: true
  },
  profilePic: { // URL of user's profile picture
    type: String,
    default: "", // TODO: Set default profile picture path here
  },
  bio: { // User's bio
    type: String,
    default: "",
  },
  bookmarks: { // Array of user's bookmarked post IDs
    type: Array,
    default: []
  },
  verified: { // Whether user is a verified organizer
    type: Boolean,
    default: false
  },
  score: { // Score calculated by hours * 3 * # of activities
    type: Number,
    default: 0
  }
});

exports.User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;