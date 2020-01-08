const router = require('express').Router();

const { getUnits } = require('../controllers/unit-controllers');

router.get('/', getUnits);

module.exports = router;