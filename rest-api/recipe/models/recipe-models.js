const db = require('../../../database/dbConfig')
module.exports = {
    getRecipes,
    getRecipeById
}

async function getRecipes() {
    const recipes = await db('recipes as r')
        .leftJoin(
            'recipe_images as rim',
            'rim.recipe_id',
            'r.id'
        )
        .leftJoin(
            'images as i',
            'i.id',
            'rim.image_id'
        )
        .select(
            'r.id',
            'r.title as recipe_title',
            'r.description',
            'r.instructions',
            'r.time_required',
            'r.difficulty',
            'r.budget',
            'i.url as image'
        );
    return recipes;
}

async function getRecipeById(id) {
    const recipe = await db('recipes as r')
        .leftJoin(
            'recipe_images as rim',
            'rim.recipe_id',
            'r.id'
        )
        .leftJoin(
            'images as i',
            'i.id',
            'rim.image_id'
        )
        .leftJoin(
            'recipe_categories as rc',
            'rc.recipe_id',
            'r.id'
        )
        .leftJoin(
            'categories as c',
            'c.id',
            'rc.category_id'
        )
        .select(
            'r.id',
            'r.title as recipe_title',
            'r.description',
            'r.instructions',
            'r.time_required',
            'r.difficulty',
            'r.budget',
            'i.url as image',
            'c.name as category'
        )
        .where('r.id', id)
        .first();
    const ingredients = await db('recipe_ingredients as ri')
        .join(
            'recipes as r',
            'r.id',
            'ri.recipe_id'
        )
        .join(
            'ingredients as i',
            'i.id',
            'ri.ingredient_id'
        )
        .join(
            'units as u',
            'u.id',
            'ri.unit_id'
        )
        .select(
            'r.title as recipe',
            'i.name as ingredient',
            'ri.quantity',
            'u.name as unit'
        )
        .where('r.id', id);
    const tags = await db('recipe_tags as rt')
        .join(
            'recipes as r',
            'r.id',
            'rt.recipe_id'
        )
        .join(
            'tags as t',
            't.id',
            'rt.tag_id'
        )
        .select(
            'r.title as recipe',
            't.name as tag'
        )
        .where('r.id', id);
    return {recipe, ingredients, tags};
}