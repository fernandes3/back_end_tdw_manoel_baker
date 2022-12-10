const userModel = require('../models/userModel');


module.exports = {
    async getAllUsers(req, res) {
        const response = await userModel.findAll();
        res.json(response);
    },

    async getUserById(req, res) {


        const idUser = req.params.id;
        const response = await userModel.findUserById(idUser);
        res.json(response);
    },
    async getUserAuth(req, res) {
        const user = req.body
       

    
        const response = await userModel.findUserByLoginAndPassword(user.login, user.senha);
      
        if(response.length == 0){
            res.status(404).send('User not fucking found');
        }else{
            res.json(response)
        }
        
    }
    ,
    async create(req, res) {
        
        const user = req.body
       
        const response = await userModel.insertUser(user);
        console.log(response);
        res.json(response);

    },
    
    
    async update(req, res) {
        const { id } = req.params
        const user = req.body
        const response = await userModel.updateUser(id, user);
        res.json(response);
    }
    ,

    async delete(req, res) {
        const { id } = req.params
        const response = await userModel.deleteUser(id);
        res.json(response);
    }

}