
exports.up = async function(knex) {
    await knex.schema.createTable('recipe_categories', tbl => {
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('category_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('categories')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .primary(['category_id', 'recipe_id']);
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipe_categories');
};