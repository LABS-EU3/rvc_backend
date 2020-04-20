const router = require('express').Router();

const {
  updateInstructionByRecipeId,
  deleteInstructionByRecipeId,
  addInstructionByRecipeId,
} = require('../controllers/instructions-controllers');

router.put('/:id', updateInstructionByRecipeId);
router.post('/:id', addInstructionByRecipeId);
router.delete('/:id', deleteInstructionByRecipeId);

module.exports = router;
