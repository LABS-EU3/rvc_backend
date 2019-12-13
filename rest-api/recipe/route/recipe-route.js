const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json('no cooking without a recipe')
})

module.exports = router