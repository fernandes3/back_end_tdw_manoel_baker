const connection = require('../database/config')


module.exports = {

    async findAll() {

        try {
            var products = await
                connection('TB_Produtos as p')
                    .innerJoin('TB_UnidadeMedida as u', 'p.IDUnidadeMedida', '=', 'u.IDUnidadeMedida')
                    .innerJoin('TB_Categoria as c', 'p.IDCategoria', '=', 'c.IDCategoria')
                    .select(

                        'p.IDProduto',
                        'p.Descricao as Descricao_Produto',
                        'p.IDUnidadeMedida',
                        'u.Descricao as Descricao_UnidadeMedida',
                        'c.IDCategoria',
                        'c.Descricao as Descricao_Categoria',
                        'p.CodigoDeBarras',
                        'p.Quantidade',
                        'p.QuantidadeMinima',
                        'p.ValorUnitario'
                    )


        } catch (err) {
            return err;
        }
        return products;
    }
    ,
    async findProductById(productId) {

        try {
            var products = await
                connection('TB_Produtos as p')
                    .innerJoin('TB_UnidadeMedida as u', 'p.IDUnidadeMedida', '=', 'u.IDUnidadeMedida')
                    .innerJoin('TB_Categoria as c', 'p.IDCategoria', '=', 'c.IDCategoria')
                    .select(

                        'p.IDProduto',
                        'p.Descricao as Descricao_Produto',
                        'p.IDUnidadeMedida',
                        'u.Descricao as Descricao_UnidadeMedida',
                        'c.IDCategoria',
                        'c.Descricao as Descricao_Categoria',
                        'p.CodigoDeBarras',
                        'p.Quantidade',
                        'p.QuantidadeMinima',
                        'p.ValorUnitario'
                    )
                    .where('IDProduto', productId)


        } catch (err) {
            return err;
        }
        return products;
    }
    ,

    async insertProduct(productObject) {
        try {
            let product = await
                connection('TB_Produtos')
                    .insert(productObject)

            return product
        } catch (err) {
            return err
        }
    }
    ,
    async updateProduct(productId, produto) {
        try {
            let product = await
                connection('TB_Produtos')
                    .where('IDProduto', productId)
                    .update(produto)

            return product
        } catch (err) {
            return err
        }
    },


    async deleteProduct(productId) {

        try {

            let product = await
                connection('TB_Produtos')
                    .where('IDProduto', productId)
                    .del()

        } catch (err) {
            return err
        }


    }


}