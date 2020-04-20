const db = require('../models/ingredient-models');

module.exports = {
  getIngredients,
  updateIngredientByRecipeId,
  addIngredientToRecipe,
  removeIngredientFromRecipe,
};

async function getIngredients(req, res) {
  try {
    const ingredients = await db.findAllIngredients();
    if (ingredients.length) {
      res.status(200).json(ingredients);
    } else {
      res.status(404).json({ message: 'There are no saved ingredients' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'There was an error retrieving the saved ingredients',
      error,
    });
  }
}

async function updateIngredientByRecipeId(req, res) {
  try {
    const ingredients = await db.updateIngredientByRecipeId(
      req.body,
      req.params.id
    );
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({
      message: 'There was an error updating the ingredient.',
      error: errorHandler(err),
    });
  }
}

async function addIngredientToRecipe(req, res) {
  try {
    const ingredients = await db.addIngredientToRecipe(req.body, req.params.id);
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({
      message: 'There was an error adding an ingredient to the recipe.',
      error: errorHandler(err),
    });
  }
}
async function removeIngredientFromRecipe(req, res) {
  try {
    const ingredient = await db.removeIngredientFromRecipe(
      req.body,
      req.params.id
    );
    res.status(200).json(ingredient);
  } catch (err) {
    res.status(500).json({
      message: 'There was an error removing the ingredient from the recipe.',
      error: errorHandler(err),
    });
  }
}
