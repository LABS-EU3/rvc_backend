const router = require('express').Router();

const { getRecipes, getRecipeById } = require('../controllers/recipe-controllers');
const { validateId } = require('../middlewares/recipe-middlwares')

router.get('/', getRecipes);
router.get('/:id', validateId, getRecipeById)

module.exports = router;
