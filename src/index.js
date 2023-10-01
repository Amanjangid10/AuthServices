const express = require('express');
const app = express()

const bodyParser = require('body-parser');


const {PORT}= require('../src/config/serverConfig')


const AuthStartUp = async () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`)
    })

}

AuthStartUp()