const unidadeMedidaModel = require('../models/unidadeMedidaModel.js');

module.exports = {
    async getAllProducts(req, res) {
        const response = await unidadeMedidaModel.findAll();
        res.json(response);
    },

    async getUnidadeMedidaById(req, res) {
        console.log(req.params);

        const idUnidadeMedida = req.params.id;
        const response = await unidadeMedidaModel.findUnidadeMedicaById(idUnidadeMedida);
        res.json(response);
    }

    ,
    async create(req, res) {
        
        const unidade = req.body
        const response = await unidadeMedidaModel.insertUnidadeMedida(unidade);
        res.json(response);

    },

    async update(req, res) {
        const { id } = req.params
        const unidade = req.body
        const response = await unidadeMedidaModel.updateUnidadeMedida(id, unidade);
        res.json(response);
    }
    ,

    async delete(req, res) {
        const { id } = req.params
        const response = await unidadeMedidaModel.deleteUnidadeMedida(id);
        res.json(response);
    }

}