const dbRecipe = require('../models/recipe-models');
const errorHandler = require('../middlewares/errorHandler');

module.exports = {
  getRecipes,
  getRecipeById,
  addRecipe,
  addImageToRecipe,
  updateIngredientByRecipeId,
  addIngredientToRecipe,
  removeIngredientFromRecipe
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

async function getRecipeById(req, res) {
  const { id } = req.params;
  try {
    const recipe = await dbRecipe.getRecipeById(id);
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

async function addImageToRecipe(req, res) {
  try {
    const recipeWithImages = await dbRecipe.addImageToRecipe(req.body, req.params.id);
    res.status(201).json(recipeWithImages);
  } catch (err) {
    res.status(500).json({
      message: 'There was an error adding the image to the recipe.',
      error: errorHandler(err)
    });
  };
};

async function updateIngredientByRecipeId(req, res) {
  try{
    const ingredients = await dbRecipe.updateIngredientByRecipeId(req.body, req.params.id);
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({
      message: 'There was an error updating the ingredient.',
      error: errorHandler(err)
    });
  };
};

async function addIngredientToRecipe(req, res) {
  try {
    const ingredients = await dbRecipe.addIngredientToRecipe(req.body, req.params.id);
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({
      message: 'There was an error adding an ingredient to the recipe.',
      error: errorHandler(err)
    });
  };
};

async function removeIngredientFromRecipe(req, res) {
  try {
    const ingredient = await dbRecipe.removeIngredientFromRecipe(req.body, req.params.id);
    res.status(200).json(ingredient);
  } catch (err) {
    res.status(500).json({
      message: 'There was an error removing the ingredient from the recipe.',
      error: errorHandler(err)
    });
  };
};
