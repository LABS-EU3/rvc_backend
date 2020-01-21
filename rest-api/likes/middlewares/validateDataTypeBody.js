function validateDataTypeBody(req, res, next) {
  if (
    !isNaN(Number(req.body.user_id)) &&
    !isNaN(Number(req.body.recipe_id))
  ) {
    next();
  } else {
    res
      .status(500)
      .json({ error: 'Either user_id or recipe_id is not an integer' });
  }
}

module.exports = { validateDataTypeBody };
