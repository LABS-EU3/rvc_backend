const router = require('express').Router();

const { getRecipes } = require('../controllers/recipe-controllers');

router.get('/', getRecipes);

module.exports = router;
