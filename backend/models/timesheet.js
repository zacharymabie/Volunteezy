const mongoose = require("mongoose");

const timesheetSchema = mongoose.Schema({
    userID: { // User ID
        type: String,
        required: true
    },
    entries: { // Array of Record objects
        type: Array,
        default: []
    },
    access: { // Array of user IDs given access to this timesheet
        type: Array,
        default: []
    }
});

exports.Timesheet = mongoose.model("Timesheet", timesheetSchema);
exports.timesheetSchema = timesheetSchema;
