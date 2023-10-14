const { create } = require('../../controllers/user-Controller')
const express = require('express')
const router = express.Router()


router.use('/signUp', create);


module.exports = router;