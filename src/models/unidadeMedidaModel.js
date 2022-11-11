const connection = require('../database/config')

module.exports = {

    async findAll() {
        try {

            let unidade = await
                connection('TB_UnidadeMedida')
                    .select('*')

            return unidade
        } catch (error) {
            return error
        }

    }
    ,
    async findUnidadeMedicaById(idUnidadeMedida) {

        try {

            let unidade = await
                connection('TB_UnidadeMedida')
                    .select('*')
                    .where('IDUnidadeMedida', idUnidadeMedida)
            return unidade

        } catch (error) {
            return error
        }



    }
    ,

    async insertUnidadeMedida(unidadeMedida) {

        try {
            let unidade = await
                connection('TB_UnidadeMedida')
                    .insert(unidadeMedida)
            return unidade

        } catch (error) {
            return error
        }



    }
    ,
    async updateUnidadeMedida(idUnidadeMedida, unidadeMedida) {
        try {
            let unidade = await
                connection('TB_UnidadeMedida')
                    .where('IDUnidadeMedida', idUnidadeMedida)
                    .update(unidadeMedida)

            return unidade
        } catch (error) {
            return error
        }


    },


    async deleteUnidadeMedida(idUnidadeMedida) {
        try {
            let unidade = await
                connection('TB_UnidadeMedida')
                    .where('IDUnidadeMedida', idUnidadeMedida)
                    .del()
            return unidade
        } catch (error) {
            return error
        }
    }


}