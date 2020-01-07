exports.up = async function(knex) {
  await knex.schema.createTable('videos', tbl => {
    tbl.increments();
    tbl.text('url').notNullable();
    tbl.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('videos');
};
