const categoryModel = require('../models/categoryModel');
const productModel = require('../models/categoryModel');

module.exports = {
    async getAllCategories(req, res) {
        const response = await categoryModel.findAll();
        res.json(response);
    },

    async getCategoryById(req, res) {
        console.log(req.params);

        const idCategory = req.params.id;
        const response = await categoryModel.findCategoryById(idCategory);
        res.json(response);
    }

    ,
    async create(req, res) {
        
        const category = req.body
        console.log(category);
        const response = await categoryModel.insertCategory(category);
        res.json(response);

    },

    async update(req, res) {
        const { id } = req.params
        const category = req.body
        const response = await categoryModel.updateCategory(id, category);
        if (response === 0) {
            res.status(404).json('Category not found')
        }
        res.json(response);
    }
    ,

    async delete(req, res) {
        const  { categoryId }  = req.params
        const response = await categoryModel.deleteCategory(categoryId);
        res.json(response);
    }

}