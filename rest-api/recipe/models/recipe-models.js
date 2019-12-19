const db = require('../../../database/dbConfig')
module.exports = {
    getRecipes,
    getRecipeById
}

async function getRecipes() {
    const recipes = await db('recipes');
    return recipes;
}

async function getRecipeById(id) {
    const recipe = await db('recipes').where({ id }).first();
    return recipe;
}