const { User ,Roles} = require('../models/index');
const validationError = require('../utils/validationError');



class userRepository{

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            // if (error.name == 'sequelizeValidationError') {
            //     throw new validationError(error);
            // }
            console.log('something wrong in repository layer')
            throw (error);
        }
    }

    async destroy(id) {
        try {
            const user = await User.destroy({
                where: {
                    Id :id
                }
            });
            console.log("user deleted succesfully");
            return user;
            
        } catch (error) {
            console.log('Something wrong with repository layer');
            throw (error);
        }
    }
    async getbyid(id) {
        try {
            const user = await User.findByPk(id, {
                attributes: ["email", "password"]
            });
            return user;
        } catch (error) {
            console.log('Something wrong with repository layer');
            throw (error);
        }
        
    }

    async getbyemail(emailId) {
        try {
            const user = await User.findOne({
                where: {
                    email: emailId
                }
            })
            return user;
        } catch (error) {
            console.log('Something wrong with repository layer');
            throw (error);
        }
        
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Roles.findOne({
                where: {
                    name:'ADMIN'
                }
            })
            return user.hasRole(adminRole);
        } catch (error) {
            console.log('something wrong with repository layer');
            throw error;
        }
    }
}

module.exports = userRepository;