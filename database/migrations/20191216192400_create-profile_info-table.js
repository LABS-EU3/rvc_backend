
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('profile_info', tbl => {
        tbl
            .increments();
        tbl
            .string('profile_pic')
            .notNullable();
        tbl
            .string('first_name')
            .notNullable();
        tbl
            .string('last_name')
            .notNullable();
        tbl
            .string('bio', 500)
            .notNullable();
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTableIfExists('profile_info');
};
