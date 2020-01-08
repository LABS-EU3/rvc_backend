exports.up = async function(knex) {
  await knex.schema.table('recipes', tbl => tbl.dropColumn('instructions'));
};

exports.down = async function(knex) {
  await knex.schema.alterTable('recipes', tbl => {
    tbl
      .text('instructions')
      .notNullable()
      .defaultTo('');
  });
};
