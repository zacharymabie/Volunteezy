const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    authorId: { // User ID of post author
        type: String,
        required: true,
    },
    content: { // Text content of post
        type: String,
        required: true,
    },
    timestamp: { // Time post posted
        type: Date,
        default: Date.now,
    },
    zip: { // ZIP code of event
        type: Number,
        required: false,
    },
    attachment: { // URL to file for event (e.g. flyer image)
        type: String,
        required: false,
    },
    comments: { // Array of comment IDs
        type: Array,
        default: []
    },
    attendees: { // Array of user IDs
        type: Array,
        default: []
    }
});

exports.Post = mongoose.model("Post", postSchema);
exports.postSchema = postSchema;