
exports.up = async function(knex) {
    await knex.schema.createTable('recipes', tbl => {
        tbl
            .increments();
        tbl
            .string('title')
            .notNullable();
        tbl
            .string('description', 500)
            .notNullable();
        tbl
            .string('instructions')
            .notNullable();
        tbl
            .datetime('time_required', { precision: 6 })
            .defaultTo(knex.fn.now(6))
            .notNullable();
        tbl
            .string('difficulty')
            .notNullable();
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
        tbl
            .timestamp('created_at', { useTz: true })
            .defaultTo(knex.fn.now());
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes');
};
