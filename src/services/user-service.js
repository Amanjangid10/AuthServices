const  userRepository  = require('../repository/user-repository')

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

}

module.exports = userService;