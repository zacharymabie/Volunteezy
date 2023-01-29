const express = require("express");
const router = express.Router();

async function authenticate(token, userID) {
    const user = await User.findById(userID);
    if (!user) return false;
    return token === user.passwordHash
}

export { authenticate };