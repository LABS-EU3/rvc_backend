
exports.up = async function(knex) {
    await knex.schema.createTable('recipe_ingredients', tbl => {
        tbl
            .increments();
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .text('quantity')
            .notNullable();
        tbl
            .integer('unit_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('units')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipe_ingredients');
};