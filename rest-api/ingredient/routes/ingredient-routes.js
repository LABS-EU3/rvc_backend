const router = require('express').Router();

const {
  getIngredients,
  updateIngredientByRecipeId,
  addIngredientToRecipe,
  removeIngredientFromRecipe,
} = require('../controllers/ingredient-controllers');

router.get('/', getIngredients);
router.put('/:id', updateIngredientByRecipeId);
router.post('/:id', addIngredientToRecipe);
router.delete('/:id', removeIngredientFromRecipe);

module.exports = router;
