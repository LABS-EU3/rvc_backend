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
  // let relatives = [];
  // let toVisit = await getImmediateRelatives(id);

  // let passes = 1;
  // while (passes <= order) {
  //   for (let i = 0; i < toVisit.length; i++) {
  //     const currentRecipe = toVisit.shift();
  //     const newRecipes = await getImmediateRelatives(currentRecipe.id);

  //     if (!includesRecipe(relatives, currentRecipe)) {
  //       toVisit.push(currentRecipe);
  //     }

  //     relatives = mergeSortedRecipeArrays(relatives, newRecipes);
  //   }

  //   passes++;
  // }

  // return max_length? relatives.slice(0, max_length) : relatives;
}

// getRelatives helper
// async function getImmediateRelatives(id) {
//   const currentRecipe = await findById(id);
//   const parent = await findById(currentRecipe.parent_id);
//   const children = await db('recipes').where({ 'parent_id': id });

//   return [parent, ...children].sort((recipe1, recipe2) => recipe1.id - recipe2.id);
// }

// getRelatives helper
// function mergeSortedRecipeArrays(recipeArray1, recipeArray2) {
//   let i = 0;
//   let j = 0;
//   let newArray = [];

//   while (i < recipeArray1.length || j < recipeArray2.length) {
//     if (recipeArray1.length === 0) {
//       newArray = recipeArray2;
//       j = recipeArray2.length;
//     } else if (recipeArray2.length === 0) {
//       newArray = recipeArray1;
//       i = recipeArray2.length;
//     } else if (recipeArray1[i].id < recipeArray2[j].id) {
//       newArray.push(recipeArray1[i]);
//       i++;
//     } else if (recipeArray2[j].id < recipeArray1[i].id) {
//       newArray.push(recipeArray2[j]);
//       j++;
//     } else {
//       newArray.push(recipeArray1[i]);
//       i++;
//       j++;
//     }
//   }

//   return newArray;
// }

// getRelativesHelper
// function includesRecipe(arr, recipe) {
//   arr.forEach(r => {
//     if (r.id === recipe.id) {
//       return true;
//     }
//   });

//   return false;
// }