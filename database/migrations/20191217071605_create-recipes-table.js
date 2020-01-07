exports.up = async function(knex) {
  await knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.text('title').notNullable();
    tbl.text('description').notNullable();
    tbl.text('instructions').notNullable();
    tbl.specificType('time_required', 'SMALLINT').notNullable();
    tbl
      .integer('difficulty')
      .notNullable()
      .unsigned();
    tbl
      .integer('budget')
      .notNullable()
      .unsigned();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('parent_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes');
};
