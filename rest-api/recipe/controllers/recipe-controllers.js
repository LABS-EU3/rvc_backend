const dbRecipe = require('../models/recipe-models');
const errorHandler = require('../middlewares/errorHandler');

module.exports = {
  getRecipes,
  getRecipeById,
  postCloneWithID,
  addRecipe,
  editRecipeInfo
};

async function getRecipes(req, res) {
  try {
    const recipes = await dbRecipe.getRecipes();
    if (recipes.length) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: 'There are no saved recipes' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'There was an error retrieving the saved recipes',
      error
    });
  }
}

async function postCloneWithID(req, res) {
  try {
    const recipe = await dbRecipe.cloneWithID(req.params.id, req.decoded);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error getting the recipe of id ' + id,
      error
    });
  }
}

async function getRecipeById(req, res) {
  try {
    const recipe = await dbRecipe.getRecipeById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error getting the recipe of id ' + id,
      error
    });
  }
}

async function addRecipe(req, res) {
  try {
    const recipe = await dbRecipe.addRecipeTransaction(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error creating the recipe',
      error: errorHandler(error)
    });
  }
}
//sam
async function editRecipeInfo(req, res) {
  const { id } = req.params;
  try {
    const editRecipe = await dbRecipe.editRecipeInfo(id, req.body);
    editRecipe
      ? res.status(200).json({ message: 'recipe successfully updated' })
      : res.status(401).json({ message: 'recipe id does not match ' });
  } catch (error) {
    res.status(500).json({
      message: `update unsuccesful for id` + id,
      error
    });
  }
}
