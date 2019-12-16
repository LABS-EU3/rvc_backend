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

async function getRelatives(id, order, max_length = null) {
  let relatives = await getImmediateRelatives(id);
  let passes = 1;

  while (passes <= order) {
    relatives.forEach(async relative => {
      const newRelatives = await getImmediateRelatives(relative.id);
      mergeSortedRecipeArrays(relatives, newRelatives);
    });

    passes++;
  }

  return max_length? relatives.slice(0, max_length) : relatives;
}

// getRelatives helper
async function getImmediateRelatives(id) {
  const currentRecipe = await findById(id);
  const parent = await findById(currentRecipe.parent_id);
  const children = await db('recipes').where({ 'parent_id': id });

  return [parent, ...children].sort((id1, id2) => id1 - id2);
}

// getRelatives helper
function mergeSortedRecipeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArray = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArray.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      newArray.push(arr2[j]);
      j++;
    } else {
      newArray.push(arr1[i]);
      i++;
      j++;
    }
  }

  return newArray;
}