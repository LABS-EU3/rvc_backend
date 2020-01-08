const router = require('express').Router();

const { getCategories } = require('../controllers/category-controllers');

router.get('/', getCategories);

module.exports = router;