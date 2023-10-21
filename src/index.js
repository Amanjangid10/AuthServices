const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const { PORT, Db_Sync } = require('../src/config/serverConfig')
const routes = require('./routes/index');
const db = require('./models/index')



const AuthStartUp = async() => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', routes)

    app.listen(PORT, async() => {
        console.log(`Server is running on port : ${PORT}`);
        if (Db_Sync) {
           await db.sequelize.sync({alter:true})
        }

    })

    
}

AuthStartUp()