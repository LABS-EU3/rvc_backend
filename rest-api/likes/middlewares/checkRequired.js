function checkRequired(req, res, next) {
  if (
    req.body.hasOwnProperty('recipe_id') &&
    req.body.hasOwnProperty('user_id')
  ) {
    next();
  } else {
    res
      .status(500)
      .json({ error: 'Either a recipe_id or user_id was not provided ' });
  }
}

module.exports = { checkRequired };
