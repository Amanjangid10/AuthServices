const { create, signIn, isAuthenticated, isAdmin } = require('../../controllers/user-Controller')
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

router.get('/admin', isAdmin)




module.exports = router;