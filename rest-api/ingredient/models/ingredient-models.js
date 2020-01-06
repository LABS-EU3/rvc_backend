const db = require('../../../database/dbConfig')

module.exports = {
    findAllIngredients,
    findIngredientBy,
    addIngredient
}

async function findAllIngredients() {
    const ingredients = await db('ingredients');
    return ingredients;
}

async function findIngredientBy(info) {
    const ingredient = await db('ingredients')
        .where({ id: info })
        .orWhere({ name: info });
    return ingredient;
}

async function addIngredient(name) {
    const [ingredient] = await db('ingredients').returning('*').insert(name);
    return ingredient;
}