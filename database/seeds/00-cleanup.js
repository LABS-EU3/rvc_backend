const cleaner = require('knex-cleaner');

exports.seed = function (knex) {
  return knex('recipe_ingredients')
    .del()
    .then(() => knex('likes').del())
    .then(() => knex('recipe_images').del())
    .then(() => knex('recipe_videos').del())
    .then(() => knex('recipe_categories').del())
    .then(() => knex('recipe_tags').del())
    .then(() => knex('recipe_instructions').del())
    .then(() => knex('profile_info').del())
    .then(() => knex('recipes').del())
    .then(() => {
      return cleaner.clean(knex, {
        // deals with all other tables*
        mode: 'truncate',
        restartIdentity: true, // used to tell PostgresSQL to reset the ID counter
        ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
      });
    });
};

// Can expand the above if we add more tables!

// *i.e. all tables which don't reference a foreign key!
