
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').notNullable().unique();
        tbl.string('email').notNullable().unique();
        tbl.string('password').notNullable();
        tbl.timestamp('created_at', { useTz: true });
  })
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTableIfExists('users');
};