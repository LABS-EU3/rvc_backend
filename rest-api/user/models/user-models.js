const db = require('../../../database/dbConfig')

module.exports = {
    getUserById
}

function getUserById(id) {
    return db('users')
        .select('id', 'username', 'email')
        .where({ id })
        .first();
}