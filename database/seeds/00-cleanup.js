const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(() => knex('units').truncate())
    .then(() => knex('recipe_ingredients').truncate())
    .then(() => knex('profile_info').truncate())
    .then(() => knex('likes').truncate())
    .then(() => knex('recipes').truncate())
    .then(() => {
      return cleaner.clean(knex, { // deals with _users_
        mode: 'truncate',
        restartIdentity: true, // used to tell PostgresSQL to reset the ID counter
        ignoreTables: ['knex_migrations', 'knex_migrations_lock']
      })
    });
};

// Can expand the above once we add more tables!
