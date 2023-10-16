const { create, signIn } = require('../../controllers/user-Controller')
const express = require('express')
const router = express.Router()


router.use('/signUp', create);
router.use('/signIn', signIn)


module.exports = router;