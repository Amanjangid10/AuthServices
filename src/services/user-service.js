const jwt = require('jsonwebtoken');
const userRepository = require('../repository/user-repository');
const { jwt_key } = require('../config/serverConfig');
const bcrypt= require('bcrypt')


class userService {

    constructor() {
        this.UserRepository = new userRepository()
    }

    async create(data) {
        try {
            const user = await this.UserRepository.create(data);
            return user;
        } catch (error) {
            console.log('Something is wrong with service layer')
            throw (error)  
        }
    }


    async signIn(email, plainPassword) {
        try {
            // get user email and details
            const user = await this.UserRepository.getbyemail(email)
            //check user password is correct or not 
            const passwordMatch = await this.checkPassword(plainPassword, user.password);
            //check if password match or not
            if (!passwordMatch) {
                console.log('password does not match')
                throw {error : 'incorrect password'}
            }

            const jwt = await this.createToken({ email: user.email, id: user.id })
            return jwt;     
        } catch (error) {
            console.log('something went wrong while sign in process')
            throw error;
        }
    }

    async authenticateUser(token) {
        try {
            const response = await this.verifyToken(token);
            if (!response) {
                console.log('invalid token')
                throw {error: 'invalid token'}
            }
            const user = await this.UserRepository.getbyid(response.id);
            if (!user) {
                console.log('no user found with corresponding token')
                throw {error : 'no user found with corresponding token'}
            }
            return user.id;
        } catch (error) {
            console.log('something wrong with authenticating the user')
            throw error;
        }
    }



    async createToken(user) {
        
        try {
            const token = await jwt.sign(user, jwt_key, { expiresIn: '2h' })
            return token;
        }
        catch (error) {
            console.log('error while creating token');
            throw error;
        }
    }
    
    async verifyToken(token) {
        try {
            const response = await jwt.verify(token, jwt_key);
            return response;
        } catch (error) {
            console.log('token not verified ')
            throw error;
        }    
    }

    async checkPassword(plainPassword, encryptedPassword) {
        try {
            const result = await bcrypt.compareSync(plainPassword, encryptedPassword)
            return result;   
        } catch (error) {
            console.log('passwords does not match ');
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const user= await this.UserRepository.isAdmin(userId)
            return user;
        } catch (error) {
            console.log('something wrong with service layer ');
            throw error;
        }
    }

}

module.exports = userService;