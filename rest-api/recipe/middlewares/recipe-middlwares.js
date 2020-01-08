const db = require('../../../database/dbConfig');

module.exports = {
  validateId
};

async function validateId(req, res, next) {
  try {
    const recipe = await db('recipes').where({ id: req.params.id });
    if (recipe.length) {
      next();
    } else {
      res
        .status(404)
        .json({ message: 'There is no recipe with id ' + req.params.id });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was an error retrieving the recipes' });
  }
}
