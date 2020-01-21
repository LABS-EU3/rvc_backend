function validateDataTypeParams(req, res, next) {
  if (req.params.id && !isNaN(Number(req.params.id))) {
    next();
  } else {
    res.status(500).json({ error: `${req.params.id} is not an integer` });
  }
}

module.exports = { validateDataTypeParams };
