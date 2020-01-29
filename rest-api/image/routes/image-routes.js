const router = require('express').Router();

const { validateId } = require('../../recipe/middlewares/validateID');

router.post('/:id', /* validateToken, */ validateId, addImageToRecipe);

module.exports = router;
