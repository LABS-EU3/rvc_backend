const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return knex('recipe_ingredients').del()
    .then(() => knex('units').del())
    .then(() => knex('ingredients').del())
    .then(() => knex('profile_info').del())
    .then(() => knex('likes').del())
    .then(() => knex('recipes').del())
    .then(() => {
      return cleaner.clean(knex, { // deals with _users_*
        mode: 'truncate',
        restartIdentity: true, // used to tell PostgresSQL to reset the ID counter
        ignoreTables: ['knex_migrations', 'knex_migrations_lock']
      })
    });
};

// Can expand the above once we add more tables!

// *users is last because every other table references a foreign key!
