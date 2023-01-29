const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).send({success: true, response: "Pong!"});
});

router.post("/", async (req, res) => {
    
    res.status(200).send();
});

module.exports = router;