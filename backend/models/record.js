const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
    userID: { // User ID
        type: Number,
        required: true
    },
    date: { // Date of hours
        type: Date,
        default: Date.now,
    },
    hours: { // Number of hours
        type: Number,
        required: true
    },
    supervisor: { // Supervisor or organization signing off on hours
        type: String
    },
    supervisorId: { // User ID of supervisor
        type: Number
    },
    activity: { // Text description of activity
        type: String
    }
});

exports.Record = mongoose.model("Record", recordSchema);
exports.recordSchema = recordSchema;
