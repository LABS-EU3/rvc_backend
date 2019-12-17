
exports.up = async function(knex) {
    await knex.schema.createTable('recipe_images', tbl => {
        tbl
            .integer('image_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('images')
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
            .primary(['image_id', 'recipe_id']);
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipe_images');
};