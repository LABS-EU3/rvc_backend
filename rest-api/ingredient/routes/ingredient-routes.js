const router = require('express').Router();

const { getIngredients } = require('../controllers/ingredient-controllers');

router.get('/', getIngredients);

module.exports = router;