const connection = require('../database/config');

module.exports = {

    async findAll() {

        try {
            var perfis = await
                connection('TB_Perfil as p')
                    .select(
                        'p.IDPerfil as perfilId',
                        'p.Descricao as description'
                    )
                    .orderBy('perfilId')


        } catch (err) {
            console.log(err);
        }
        return perfis;
    }
    ,
    async findPerfilById(perfilId) {
        try {
            var perfis = await
                connection('TB_Perfil as p')
                    .select(
                        'p.IDPerfil as perfilId',
                        'p.Descricao as description'
                    )
                    .where('p.IDPerfil', perfilId)
        } catch (err) {
            console.log(err);
        }

        return perfis;
    }
    ,

    async insertPerfil(perfilObject) {

        try {
            var perfil = await
                connection('TB_Perfil')
                    .insert(perfilObject);
            return perfil;
        } catch (err) {
            console.log(err)
        }


    }
    ,
    async updatePerfil(perfilId, perfil) {

        try {
            var response = await
                connection('TB_Perfil')
                    .where('IDPerfil', perfilId).update(perfil)

            console.log(response)
            return response


        } catch (err) {
            console.log(err);
        }
    },


    async deletePerfil(perfilId) {

        try {
            var response = await
                connection('TB_Perfil')
                    .where('IDPerfil', perfilId).del();

            console.log(response)
            return response
        } catch (err) {
            console.log(err)
        }

    }


}