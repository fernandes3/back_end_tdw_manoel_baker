const movimentoModel = require('../models/movimentoModel');

module.exports = {
    async getAllMovimento(req, res) {
        const response = await movimentoModel.findAll();
        res.json(response);
    },

    async getMovimentoById(req, res) {


        const idMovimento = req.params.id;
        const response = await movimentoModel.findMovimentoById(idMovimento);
        res.json(response);
    }

    ,
    async create(req, res) {
        const movimento = req.body
        const response = await movimentoModel.insertMovimento(movimento);
        res.json(response);

    },

    async update(req, res) {
        const { id } = req.params
        const movimento = req.body
        const response = await movimentoModel.updateMovimento(id, movimento);
        res.json(response);
    }
    ,

    async delete(req, res) {
        const { id } = req.params

        const response = await movimentoModel.deleteMovimento(id);
        res.json(response);
    }

}