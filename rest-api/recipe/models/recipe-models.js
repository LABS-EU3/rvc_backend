const db = require('../../../test-database/db-config');

module.exports = {
  find,
  getHistory,
  getRelatives
}

function find() {
  return db('recipes');
}

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

async function getHistory(id) {
  let currentRecipe = await findById(id);
  let history = [currentRecipe];

  while (currentRecipe.parent_id !== currentRecipe.id) {
    const parent = await getParent(currentRecipe);
    currentRecipe = parent;
    history.push(currentRecipe);
  }

  return history;
}

function getParent(recipe) {
  return findById(recipe.parent_id);
}