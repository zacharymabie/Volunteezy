const { Timesheet } = require("../models/timesheet.js");
const { Record } = require("../models/record.js");
const express = require("express");
const { User } = require("../models/user.js");
const router = express.Router();

// Get own timesheet
router.get("/", async (req, res) => {
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    const timesheet = await Timesheet.findOne({ userID: req.body.userId });
    if (!timesheet) {
        const timesheetModel = new Timesheet({ userID: req.body.userId });
        const newSheet = await timesheetModel.save();
        if (!newSheet) return res.status(400).send("User cannot be created");
        res.status(200).send(newSheet);
    } else {
        res.status(200).send(timesheet);
    }
});

// Get timesheet by user ID
router.get("/:userID", async (req, res) => {
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    const timesheet = await Timesheet.findOne({ userID: req.params.userID });
    if (!timesheet.access.includes(req.body.userId))
        return res.status(401).json({ success: false, message: "You do not have access to this user's timesheet" });
    res.status(200).send(timesheet);
});

// Get timesheet entry by recordID
router.get("/record/:recordID", async (req, res) => {
    const record = await Record.findOne({ _id: req.params.recordID });
    if (!(await authenticate(req.body.token, record.userID))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    res.status(200).send(record);
});

// Add entry to timesheet
router.post("/record/new", async (req, res) => {
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    const recordModel = new Record({
        userID: req.body.userId,
        date: req.body.date,
        hours: req.body.hours,
        supervisor: req.body.supervisor,
        supervisorId: req.body.supervisorId,
        activity: req.body.activity
    });
    const record = await recordModel.save();
    if (!record) return res.status(400).send("Record cannot be created");
    res.send(record);
    // Update user's score
    const user = await User.findById(req.body.userId);
    if (!user) return;
    let score = user.score + hours;
    await User.findByIdAndUpdate(user._id, { score: score }, { new: true });
});

// Edit entry in timesheet by recordID
router.put("/record/:recordID/edit", async (req, res) => {
    const record = await Record.findOne({ _id: req.params.recordID });
    if (!(await authenticate(req.body.token, record.userID))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    const newRecord = await Record.findByIdAndUpdate(record._id, {
        date: req.body.date,
        hours: req.body.hours,
        supervisor: req.body.supervisor,
        supervisorId: req.body.supervisorId,
        activity: req.body.activity
    });
    if (!newRecord) return res.status(400).send("Error editing record");
    res.status(200).send(newRecord);
    // Update user's score
    const user = await User.findById(req.body.userId);
    if (!user) return;
    let score = user.score + newRecord.hours - record.hours;
    await User.findByIdAndUpdate(user._id, { score: score }, { new: true });
});

// Export PDF of timesheet
router.get("/export", async (req, res) => {
    if (!(await authenticate(req.body.token, req.body.userID))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    const timesheet = await Timesheet.findOne({ userID: req.body.userId });
    if (!timesheet) return res.status(404).send("Timesheet cannot be found");
    // TODO: Generate PDF
    res.status(200).send();
});

module.exports = router;