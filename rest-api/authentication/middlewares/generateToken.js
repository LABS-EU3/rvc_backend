const jwt = require("jsonwebtoken");

function generateToken(data){
    const payload = {
        sub: data.id
    }

    const options = {
        expiresIn: "60d"
    }

    const secret = process.env.SECRET;

    return jwt.sign(payload, secret, options)
}

module.exports = { generateToken };
