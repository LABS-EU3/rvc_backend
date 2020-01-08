const db = require('../models/ingredient-models')

module.exports = {
  getIngredients
};

async function getIngredients(req, res) {
  try {
    const ingredients = await db.findAllIngredients();
    if (ingredients.length) {
      res.status(200).json(ingredients);      
    }
    else {
      res
        .status(404)
        .json({ message: 'There are no saved ingredients' })
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving the saved ingredients',
        error
      });
  }
}