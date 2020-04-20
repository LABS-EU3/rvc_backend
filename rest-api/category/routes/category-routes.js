const router = require('express').Router();

const {
  getCategories,
  editCategory,
} = require('../controllers/category-controllers');

router.get('/', getCategories);
router.put('/:id', editCategory);

module.exports = router;
