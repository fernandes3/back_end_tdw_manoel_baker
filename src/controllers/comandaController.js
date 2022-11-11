const comandaModel = require('../models/comandaModel');
const itemComandaModel = require('../models/itemComandaModel');

module.exports = {
    async getAllComandas(req, res) {
        const response = await comandaModel.findAll();
        res.json(response);
    },

    async getComandaById(req, res) {


        const idComanda = req.params.id;
        const response = await comandaModel.findComandaById(idComanda);
        res.json(response);
    }

    ,
    async create(req, res) {
        const comanda = req.body;

        const comanda2 = {
             "DataComanda": comanda.DataComanda
        }
        console.log(comanda);

        const items = comanda.ItemComanda


        console.log(items);

        const response = await comandaModel.insertComanda(comanda2);
        items.forEach(element => {
            element.IDComanda = response[0];
        });

        const response2 = await itemComandaModel.insertItemComanda(items);
        console.log("Item = ", items);
        //const responde2 =  await itemComandaModel

        res.json(response);

    },

    async update(req, res) {
        const { id } = req.params;
        const comanda = req.body
        const response = await comandaModel.updateComanda(id, comanda);
        res.json(response);
    }
    ,

    async delete(req, res) {
        const { id } = req.params
        const response = await comandaModel.deleteComanda(id);
        res.json(response);
    }

}