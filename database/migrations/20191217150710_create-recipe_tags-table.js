exports.up = async function (knex) {
  await knex.schema.createTable('recipe_tags', (tbl) => {
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('tag_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tags')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.primary(['tag_id', 'recipe_id']);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('recipe_tags');
};
