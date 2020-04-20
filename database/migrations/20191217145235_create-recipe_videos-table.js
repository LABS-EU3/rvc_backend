exports.up = async function (knex) {
  await knex.schema.createTable('recipe_videos', (tbl) => {
    tbl
      .integer('video_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('videos')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.primary(['video_id', 'recipe_id']);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('recipe_videos');
};
