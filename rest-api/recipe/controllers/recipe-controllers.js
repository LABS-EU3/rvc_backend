const dbRecipe = require('../models/recipe-models')

module.exports = {
  getRecipes,
  getRecipeById
};

async function getRecipes(req, res) {
  try {
    const recipes = await dbRecipe.getRecipes();
    if (recipes.length) {
      res.status(200).json(recipes);      
    }
    else {
      res.status(404).json({message: 'There are no saved recipes'})
    }
  } catch (error) {
    res.status(500).json({ message: 'There was an error retrieving the saved recipes' });
  }
}

async function getRecipeById(req, res) {
  const { id } = req.params;
  try {
    const recipe = await dbRecipe.getRecipeById(id);
    res.status(200).json(recipe);
  }
  catch (error) {
    res.status(500).json({message: 'There was an error getting the recipes of id ' + id })
  }
}