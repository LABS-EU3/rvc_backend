const db = require('../../../database/dbConfig');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../middlewares/generateToken');

function register(user) {
    return db('users')
        .insert(user)
        .returning(['username', 'id'])
        .then(([user]) => {
            const token = generateToken(user);
            return { ...user, token }
        })
}

function login(credentials) {
    return db('users')
    // Notice in the two following lines of codes I have wrapped the object's value in a string template literal
    // This is in place to convert 'undefined' into a string
    // Why? The user can choose between using username or email to login, this will lead either field to be undefined
        .select('username', 'id', 'password')
        .where('email', `${credentials.email}`)
        .orWhere('username', `${credentials.username}`)
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(credentials.password, user.password)) {
                delete user.password;
                delete user.email;
                const token = generateToken(user);
                return { ...user, token }
            } else {
                return { error: 'Your email or password is incorrect' }
            }
        });
}

module.exports = {
    register, login
}
