const router = require('express').Router();

const {
  getRecipes,
  getRecipeById,
  addRecipe,
  editRecipeInfo,
  editTag,
  editCategory
} = require('../controllers/recipe-controllers');
const { validateId } = require('../middlewares/validateID');
const { requiredFields } = require('../middlewares/requiredFields');
const { emptyFields } = require('../middlewares/emptyFields'); // Has to be disabled until frontend supports all of the features
const {
  validateToken
} = require('../../authentication/middlewares/validateToken');

router.get('/', getRecipes);
router.get('/:id', validateId, getRecipeById);
router.post('/', validateToken, requiredFields, addRecipe);

//sam
router.put('/:id/recipe-info', editRecipeInfo)
router.put('/:id/tags', editTag)
router.put('/:id/categories', editCategory)
module.exports = router;
