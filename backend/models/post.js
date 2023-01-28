const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    authorId: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    zip: {
        type: Number,
        required: false,
    },
    attachment: {
        type: String,
        required: false,
    },
    comments: {
        type: Array,
        default: []
    },
    attendees: {
        type: Array,
        default: []
    }
});

exports.Post = mongoose.model("Post", postSchema);
exports.postSchema = postSchema;