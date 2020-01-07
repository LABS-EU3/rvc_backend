const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'admin',
      email: 'admin@forkbook.co',
      password: bcrypt.hashSync('1234')
    },
    {
      username: 'user',
      email: 'user@email.com',
      password: bcrypt.hashSync('password')
    },
    {
      username: 'person',
      email: 'person@email.co.uk',
      password: bcrypt.hashSync('5432')
    }
  ]);
};
