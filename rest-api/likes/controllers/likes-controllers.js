const db = require('../models/likes-models');

module.exports = {
  getLikedRecipesByUserId,
  postLikeRecipe,
  deleteLike
};

async function getLikedRecipesByUserId(req, res) {
  try {
    const recipes = await db.getLikedRecipesByUserId(req.params.id);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error retrieving the saved recipes',
      error
    });
  }
}

async function postLikeRecipe(req, res) {
  try {
    const recipe = await db.insertLike(req.body);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error retrieving the saved recipes',
      error
    });
  }
}

async function deleteLike(req, res) {
  try {
    const result = await db.deleteLike(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error retrieving the saved recipes',
      error
    });
  }
}
