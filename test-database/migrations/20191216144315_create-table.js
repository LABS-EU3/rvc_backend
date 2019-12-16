
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('name', 256)
      .notNullable();
    table.integer('parent_id')
      .unsigned()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
