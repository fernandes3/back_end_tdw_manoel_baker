const comandaModel = require('../models/itemComandaModel');

module.exports = {
    async getAllItemComanda(req, res) {
        const response = await comandaModel.findAll();
        res.json(response);
    },

    async getItemComandaById(req, res) {


        const idComanda = req.params.id;
        const response = await comandaModel.findItemComandaById(idComanda);
        res.json(response);
    }

    ,
    async create(req, res) {

        const response = await comandaModel.insertItemComanda();
        res.json(response);

    },

    async update(req, res) {
        const { id } = req.params
        const item = req.body
        const response = await comandaModel.updateItemComanda(id, item);
        res.json(response);
    }
    ,

    async delete(req, res) {
        const { id } = req.params
        const response = await comandaModel.deleteItemComanda(id);
        res.json(response);
    }

}