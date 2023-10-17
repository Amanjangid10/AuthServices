const { create, signIn, isAuthenticated } = require('../../controllers/user-Controller')
const express = require('express');
const {AuthRequestValidators}   = require('../../middlewares/index');
const router = express.Router()


router.post('/signup',
    AuthRequestValidators.validateUserAuth,
    create
);

router.post('/signin',
    AuthRequestValidators.validateUserAuth,
    signIn
);

router.get('/authenticate',
    isAuthenticated
)




module.exports = router;