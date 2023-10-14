const express = require('express');
const router = express.Router()

const ApiRoutes = require('./v1/index')

router.use('/v1', ApiRoutes)

module.exports = router;