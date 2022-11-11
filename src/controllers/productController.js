const productModel = require('../models/productModel');

module.exports = {
    async getAllProducts(req, res) {
        const response = await productModel.findAll();
        res.json(response);
    },

    async getProductById(req, res) {
        console.log(req.params);

        const idProduct = req.params.id;
        const response = await productModel.findProductById(idProduct);
        res.json(response);
    }

    ,
    async create(req, res) {
        const product = req.body
        const response = await productModel.insertProduct(product);
        res.json(response);

    },

    async update(req, res) {
        const { id } = req.params
        const product = req.body
        const response = await productModel.updateProduct(id, product);
        if (response == 1) {
            res.status(200).json('Product update with sucess');
        } else {
            res.status(400).json('Product not found')
        }

    }
    ,

    async delete(req, res) {
        const { id } = req.params
        const response = await productModel.deleteProduct(id);
        res.json(response);
    }

}