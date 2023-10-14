const userService  = require('../services/user-service')

const UserService = new userService();

const create = async (req, res)=>{

    try {
        const response = await UserService.create({
            email: req.body.email,
            password : req.body.password
        })
        return res.status(201).json({
            success: true,
            message: 'Succesfully created a user',
            data: response,
            err : {}
        })   
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            data: {},
            err : error.explanation
        })
    }    
}

const destroy = async (req, res)=>{

    try {
        const response = await UserService.destroy(req.params.id)
        return res.status(201).json({
            success: true,
            message: 'Succesfully deleted a user',
            data: response,
            err : {}
        })   
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            data: {},
            err : error.explanation
        })
    }    
}

module.exports = { create };

