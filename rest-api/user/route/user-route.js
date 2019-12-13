const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json('who needs users when we have seeds')
})

module.exports = router