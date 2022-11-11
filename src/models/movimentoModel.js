const connection = require('../database/config')
const { connect } = require('../routes/perfil_router')

module.exports = {

    async findAll() {
        try {

            let movimento = await
                connection('TB_Movimento as m')
                    .innerJoin('TB_Usuario as u', 'm.IDUsuario', '=', 'u.IDUsuario')
                    .select(
                        'm.IDMovimento',
                        'm.Descricao',
                        'm.Tipo',
                        'm.DataMovimento',
                        'm.Valor',
                        'm.IDUsuario',
                        'u.Nome'
                    )
            return movimento

        } catch (error) {
            return error
        }

    }
    ,
    async findMovimentoById(movimentoId) {

        try {

            let movimento = await
                connection('TB_Movimento as m')
                    .innerJoin('TB_Usuario as u', 'm.IDUsuario', '=', 'u.IDUsuario')
                    .select(
                        'm.Descricao',
                        'm.Tipo',
                        'm.DataMovimento',
                        'm.Valor',
                        'm.IDUsuario',
                        'u.Nome'
                    )
                    .where('IDMovimento', movimentoId)
            return movimento

        } catch (error) {
            return error
        }

    }
    ,

    async insertMovimento(movimento) {
        try {

            let movimentoX = await
                connection('TB_Movimento')
                    .insert(movimento)

                    return movimentoX

        } catch (error) {
            return error
        }
    }
    ,
    async updateMovimento(movimentoId, movimento) {
        try {

            let movimentoX = await
            connection('TB_Movimento')
            .where('IDMovimento', movimentoId)
            .update(movimento)

            return movimentoX
            
        } catch (error) {
            return error
        }
    },


    async deleteMovimento(movimentoId) {
       

        try {
           let movimentoX = await
           connection('TB_Movimento')
           .where('IDMovimento', movimentoId)
           .del() 
        } catch (error) {
            return error
        }
    }


}