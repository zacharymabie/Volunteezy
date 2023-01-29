const { authenticate } = require("../util.js");
const { Record } = require("../models/record.js");
const { User } = require("../models/user.js");
const express = require("express");
const router = express.Router();

// Get own timesheet
router.get("/", async (req, res) => {
    if (!(await authenticate(req.query.token, req.query.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    Record.find({ userID: req.query.userId }).sort({ 'score': 'desc' }).exec(function (err, records) {
        if (err) return res.status(400).send("Error while loading timesheet");
        res.status(200).send(records);
    });
});

// Get record by recordID
router.get("/record/:recordID", async (req, res) => {
    const record = await Record.findOne({ _id: req.params.recordID });
    if (!(await authenticate(req.query.token, record.userID))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    res.status(200).send(record);
});

// Add entry to timesheet
router.post("/record/new", async (req, res) => {
    if (!(await authenticate(req.body.token, req.body.userId))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    const recordModel = new Record({
        userID: req.body.userId,
        date: new Date(req.body.date),
        hours: req.body.hours,
        supervisor: req.body.supervisor,
        supervisorId: req.body.supervisorId,
        activity: req.body.activity
    });
    const record = await recordModel.save();
    if (!record) return res.status(400).send("Record cannot be created");
    res.send(record);
    // Update user's score
    const user = await User.findById(record.userID);
    if (!user) return;
    await User.findByIdAndUpdate(user._id, { score: user.score + record.hours }, { new: true });
});

// Edit entry in timesheet by recordID
router.put("/record/:recordID/edit", async (req, res) => {
    const record = await Record.findOne({ _id: req.params.recordID });
    if (!(await authenticate(req.body.token, record.userID))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    const newRecord = await Record.findByIdAndUpdate(record._id, {
        date: new Date(req.body.date),
        hours: req.body.hours,
        supervisor: req.body.supervisor,
        supervisorId: req.body.supervisorId,
        activity: req.body.activity
    }, 
    { new: true });
    if (!newRecord) return res.status(400).send("Error editing record");
    res.status(200).send(newRecord);
    // Update user's score
    const user = await User.findById(newRecord.userID);
    if (!user) return;
    await User.findByIdAndUpdate(user._id, { score: user.score + newRecord.hours - record.hours }, { new: true });
});

// Export PDF of timesheet
router.get("/export", async (req, res) => {
    if (!(await authenticate(req.query.token, req.query.userID))) // Expect userId in body
        return res.status(401).json({ success: false, message: "Not authenticated" });
    // TODO: Generate PDF
    res.status(200).send();
});

module.exports = router;