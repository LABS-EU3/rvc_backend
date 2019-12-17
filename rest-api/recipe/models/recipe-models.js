const db = require('../../../test-database/db-config');

module.exports = {
  find,
  getHistory,
  getFirstOrderRelatives
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

// Note: writing a more general algorithm than the below has proven difficult, so this will have to do for now!
// I fully intend to come back to it in my own time, though, as I feel I'm relatively close to a solution.
// Watch this space!
async function getFirstOrderRelatives(id, max_length = null) {
  const currentRecipe = await findById(id);
  const parent = await findById(currentRecipe.parent_id);
  const children = await db('recipes').where({ 'parent_id': id }).andWhereNot({ 'id': currentRecipe.id });

  const firstOrderRelatives = (id === parent.id) ? children : [parent, ...children];

  return max_length ? firstOrderRelatives.slice(0, max_length) : firstOrderRelatives;
}