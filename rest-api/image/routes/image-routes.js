const router = require('express').Router();

const { addImageToRecipe } = require('../controllers/image-controllers');

router.post('/:id', addImageToRecipe);

module.exports = router;
