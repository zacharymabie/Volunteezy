const { User } = require("./models/user.js");

async function authenticate(token, userID) {
    const user = await User.findById(userID);
    if (!user) return false;
    return token === user.passwordHash
}

exports.authenticate = authenticate;