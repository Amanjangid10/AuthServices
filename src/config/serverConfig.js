const env = require('dotenv');
const bcrypt= require('bcrypt')
env.config();

module.exports = {
    PORT: process.env.PORT,
    SALT: bcrypt.genSaltSync(10),
    jwt_key: process.env.jwt_key
}