const userService = require('../services/user-service')
const UserService = new userService();


const create = async (req, res) => {
    
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
        console.log(error);
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            data: {},
            err : error.explanation
        })
    }    
}



const signIn = async (req, res)=>{
    try {
        const response = await UserService.signIn(req.body.email, req.body.password);
        return res.status(201).json({
            success: true,
            message: 'Successfully signed in',
            data: response,
            err : {}
        }) 
        
    } catch (error) {
        console.log('something wrong while signin');
        return res.status(500).json({
            success: false,
            message: 'error while signIn',
            data: {},
            err: error
        })
        
    }
}


const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        console.log(token)
        const response = await UserService.authenticateUser(token);
        return res.status(201).json({
            success: true,
            message: ' user succesfully authenticated and token is valid',
            data: response,
            err : {}
        }) 
        
    } catch (error) {
        console.log(error);    
        return res.status(500).json({
            success: false,
            message: 'user not authenticated as token is invalid',
            data: {},
            err: error
        })
        
    } 
}

const isAdmin = async (req, res) => {
    try {
        const user= await UserServices.isAdmin(req.body.id)
        return res.status(201).json({
            success: true,
            message: ' user has Admin',
            data: response,
            err : {}
        }) 
        
    } catch (error) {
        console.log(error);    
        return res.status(500).json({
            success: false,
            message: 'user does no have adminRole',
            data: {},
            err: error
        })
        
    } 
}





module.exports = { create , signIn, isAdmin, isAuthenticated};




