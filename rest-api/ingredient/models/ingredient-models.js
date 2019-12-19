const db = require('../../../database/dbConfig')

module.exports = {
    findAll,
    findBy,
    addIngredient
}

async function findAll() {
    const ingredients = await db('ingredients');
    return ingredients;
}

async function findBy(info) {
    const ingredient = await db('ingredients')
        .where({ id: info })
        .orWhere({ name: info });
    return ingredient;
}

async function addIngredient(name) {
    const [ingredient] = await db('ingredients').returning('*').insert(name);
    return ingredient;
}