
exports.up = async function(knex) {
    await knex.schema.createTable('likes', tbl => {
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
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
        tbl
            .primary(['user_id', 'recipe_id']);
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('likes');
};