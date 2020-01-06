
exports.up = async function(knex) {
  await knex.schema
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.string('text')
        .notNullable();
      tbl.integer('number')
        .unsigned()
        .notNullable();
    })
    .createTable('recipe_instructions', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('recipes');
      tbl.integer('instruction_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('instructions');
      tbl.primary(['recipe_id', 'instruction_id']);
    });
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('recipe_instructions')
    .dropTableIfExists('instructions');
};
