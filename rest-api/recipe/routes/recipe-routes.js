const router = require('express').Router();

const {
  getRecipes,
  getRecipeById,
  addRecipe,
  editRecipe,
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
router.put('/recipe/:id', validateId, requiredFields, editRecipe)
router.put('/tags/:id', validateId, requiredFields, editTag)
router.put('/categories/:id', validateId, requiredFields, editCategory)
module.exports = router;
