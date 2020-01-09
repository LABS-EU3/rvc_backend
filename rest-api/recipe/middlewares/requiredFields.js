function requiredFields(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'Body is empty' });
  } else {
    if (!req.body.hasOwnProperty('instructions')) {
      res.status(400).json({ error: 'No instructions were provided' });
    } else if ( 
      !(req.body.hasOwnProperty('tags') || req.body.hasOwnProperty('recipe_tags'))){
      res.status(400).json({ error: 'No tags were provided' });

    } else if (!req.body.hasOwnProperty('images')) {
      res.status(400).json({ error: 'No images were provided' });

    } else if (
      !(req.body.hasOwnProperty('ingredients') || req.body.hasOwnProperty('recipe_ingredients'))){
      res.status(400).json({ error: 'No ingredients were provided' });

    } else if (!req.body.hasOwnProperty('recipe_categories')) {
      res.status(400).json({ error: 'No categories were provided' });
      
    } else {
      next();
    }
  }
}

module.exports = { requiredFields };
