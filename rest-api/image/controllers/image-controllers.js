const db = require('../models/image-models')

module.exports = {
  addImageToRecipe
};

async function addImageToRecipe(req, res) {
  try {
    const recipeWithImages = await db.addImageToRecipe(
      req.body,
      req.params.id
    );
    res.status(201).json(recipeWithImages);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error adding the image to the recipe.',
      ...error
    });
  }
}
