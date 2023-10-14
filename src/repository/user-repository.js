const { User } = require('../models/index')


class userRepository{

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log('Something wrong with repository layer');
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
}

module.exports = userRepository;