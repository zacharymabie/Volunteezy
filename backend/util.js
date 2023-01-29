const { User } = require("./models/user.js");

async function authenticate(token, userID) {
    if (userID.length !== 24) return false;
    const user = await User.findById(userID);
    if (!user) return false;
    return token === user.passwordHash; // Token is just password [hash] for now
}

exports.authenticate = authenticate;