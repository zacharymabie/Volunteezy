const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).send([
        {
            name: "Brian",
            profilePic: ""
        },
        {
            name: "Zach",
            profilePic: ""
        },
        {
            name: "Raji",
            profilePic: ""
        }
    ]);
});

module.exports = router;