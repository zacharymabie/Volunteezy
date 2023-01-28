const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: { // User's ID
    type: Number,
    required: true,
  },
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
  posts: { // Array of user's post IDs
    type: Array,
    default: []
  },
  comments: { // Array of user's comment IDs
    type: Array,
    default: []
  },
  bookmarks: { // Array of user's bookmarked post IDs
    type: Array,
    default: []
  }
});

exports.User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;