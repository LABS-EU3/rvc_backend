const db = require("../../../database/dbConfig");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middlewares/generateToken");

function register(user) {
    return db("users")
        .insert(user)
        .returning("*")
        .then(([user]) => {
            delete user.password;
            delete user.email;
            const token = generateToken(user)
            return { ...user, token }
        })
}

function login(credentials) {
    return db("users")
        .where("email", credentials.email)
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(credentials.password, user.password)) {
                delete user.password;
                delete user.email;
                const token = generateToken(user)
                return { ...user, token }
            } else {
                return { error: "Your email or password is incorrect" }
            }
        });
}

module.exports = {
    register, login
}
