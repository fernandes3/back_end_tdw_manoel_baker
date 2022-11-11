const perfilModel = require('../models/perfilModel');


module.exports = {
    async getAllProducts(req, res) {
        const response = await perfilModel.findAll();
        res.json(response);
    },

    async getPerfilById(req, res) {
        console.log(req.params);

        const idProduct = req.params.id;
        const response = await perfilModel.findPerfilById(idProduct);
        res.json(response);
    }

    ,
    async create(req, res) {
        const perfil  = req.body
        const response = await perfilModel.insertPerfil(perfil);
        res.json(response);

    },

    async update(req, res) {
        const { id } = req.params
        const perfil =  req.body
        const response = await perfilModel.updatePerfil(id, perfil);
        res.json(response);
    }
    ,

    async delete(req,res){
        const { id } =  req.params
        const response = await perfilModel.deletePerfil(id);
        res.json(response);
    }

}