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
    const parent = await findById(currentRecipe.parent_id);
    currentRecipe = parent;
    history.push(currentRecipe);
  }

  return history;
}

async function getRelatives(id, order, max_length) {

}

async function getImmediateRelatives(id) {
  const currentRecipe = await findById(id);
  const parent = await findById(currentRecipe.parent_id);
  const children = await db('recipes').where({ 'parent_id': id });

  return [...parent, ...children].sort((id1, id2) => id1 - id2);
}