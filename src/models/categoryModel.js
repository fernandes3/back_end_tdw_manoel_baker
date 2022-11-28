const connection = require('../database/config');



module.exports = {

    async findAll() {

        try {
            var categories = await
                connection('TB_Categoria as c')
                    .select(
                        'c.IDCategoria as categoryID',
                        'c.Descricao as description'
                    )
                    .orderBy('categoryID')


        } catch (err) {
            console.log(err);
        }
        return categories;
    }
    ,
    async findCategoryById(categoryId) {
        try {
            var categories = await
                connection('TB_Categoria as c')
                    .select(
                        'c.IDCategoria as categoryID',
                        'c.Descricao as description'
                    )
                    .where('c.IDCategoria', categoryId)
        } catch (err) {
            console.log(err);
        }

        return categories;
    }
    ,

    async insertCategory(category) {

        try {
            var category2 = await
                connection('TB_Categoria')
                    .insert(category);
            return category2;
        } catch (err) {
            console.log(err)
        }


    }
    ,
    async updateCategory(categoryId, category) {

        try {
            var response = await
                connection('TB_Categoria')
                    .where('IDCategoria', categoryId).update(category)
            
            console.log(response)
            return response
            

        } catch (err) {
            console.log(err);
        }
    },


    async deleteCategory(categoryId) {

        try{
            var response =  await 
                connection('TB_Categoria')
                    .where('IDCategoria',categoryId).del();
            
            console.log(response)
            return response
        }catch(err){
            console.log(err)
        }
        
    }


}