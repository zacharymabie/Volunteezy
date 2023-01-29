const express = require("express");
const router = express.Router();

// Get own timesheet
router.get("/", async (req, res) => {
    
});

// Get timesheet by user ID
router.get("/:userID", async (req, res) => {
    // Should only work if requesting user is in timesheet's access array
});

// Get timesheet entry by recordID
router.get("/record/:recordID", async (req, res) => {

});

// Add entry to timesheet
router.post("/record/new", async (req, res) => {

});

// Edit entry in timesheet by recordID
router.put("/record/:recordID/edit", async (req, res) => {

});

// Export PDF of timesheet
router.get("/record/:recordID/export", async (req, res) => {

});

module.exports = router;