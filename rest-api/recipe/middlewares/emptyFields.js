function emptyFields(req, res, next) {
  if (!Object.entries(req.body.recipes).length) {
    res.status(400).json({ error: 'Recipes is empty' });
  } else if (!req.body.instructions.length) {
    res.status(400).json({ error: 'Instructions is empty' });
  } else if (req.body.hasOwnProperty("tags") && !req.body.tags.length) {
    res.status(400).json({ error: 'Tags is empty' });
  } else if (req.body.hasOwnProperty("recipe_tags") && !req.body.recipe_tags.length) {
    res.status(400).json({ error: 'Recipe_tags is empty' });
  } else if (!req.body.images.length) {
    res.status(400).json({ error: 'Images is empty' });
  } else if (req.body.hasOwnProperty("ingredients") && !req.body.ingredients.length) {
    res.status(400).json({ error: 'Ingredients is empty' });
  } else if (req.body.hasOwnProperty("recipe_ingredients") && !req.body.recipe_ingredients.length) {
    res.status(400).json({ error: 'Recipe_ingredients is empty' });
  } else if (!req.body.recipe_categories.length) {
    res.status(400).json({ error: 'Recipe_categories is empty' });
  } else {
    next();
  }
}

module.exports = { emptyFields };
