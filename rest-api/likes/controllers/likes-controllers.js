const db = require('../models/likes-models');
const errorHandler = require('../middlewares/errorHandler');

module.exports = {
  getLikedRecipesByUserId,
  getLikedRecipesOfUserId,
  postLikeRecipe,
  deleteLike,
};

async function getLikedRecipesByUserId(req, res) {
  try {
    const recipes = await db.getLikedRecipesByUserId(req.params.id);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong, try again in a few minutes',
      error,
    });
  }
}

async function getLikedRecipesOfUserId(req, res) {
  try {
    const recipes = await db.getLikedRecipesOfUserId(req.params.id);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong, try again in a few minutes',
      error,
    });
  }
}

async function postLikeRecipe(req, res) {
  try {
    const recipe = await db.insertLike(req.body);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong, try again in a few minutes',
      error: errorHandler(error),
    });
  }
}

async function deleteLike(req, res) {
  try {
    const result = await db.deleteLike(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong, try again in a few minutes',
      error,
    });
  }
}
