const router = require('express').Router();

const {
  getRecipes,
  getRecipeById,
  addRecipe
} = require('../controllers/recipe-controllers');
const { validateId } = require('../middlewares/validateID');

router.get('/', getRecipes);
router.get('/:id', validateId, getRecipeById);
router.post('/', addRecipe)

module.exports = router;
