
const connection = require('../database/config')

module.exports = {

    async findAll() {

        try {
            const user = await
                connection('TB_Usuario as u')
                    .innerJoin('TB_Perfil as p', 'u.IDPerfil', '=', 'p.IDPerfil')
                    .select(
                        'u.IDUsuario',
                        'u.Login',
                        'u.Nome',
                        'u.Senha',
                        'u.Status',
                        'u.IDPerfil',
                        'p.Descricao'
                    )

            return user
        } catch (err) {
            return err
        }
    }
    ,
    async findUserByLoginAndPassword(login, password) {
        try {
            const user = await
                connection('TB_Usuario as u').
                    select('u.*')
                    .where('u.Login', login)
                    .andWhere('u.Senha', password)

        console.log(user);
            return user;
        } catch (err) {
            return err;
        }


    },
    async findUserById(idUser) {

        try {
            const user = await
                connection('TB_Usuario as u')
                    .innerJoin('TB_Perfil as p', 'u.IDPerfil', '=', 'p.IDPerfil')
                    .select(
                        'u.IDUsuario',
                        'u.Login',
                        'u.Nome',
                        'u.Senha',
                        'u.Status',
                        'u.IDPerfil',
                        'p.Descricao'
                    )
                    .where('u.IDUsuario', idUser)

            return user
        } catch (err) {
            return err
        }
    }
    ,

    async insertUser(userObject) {
        try {
            let user = await
                connection('TB_Usuario')
                    .insert(userObject)
            return user
        } catch (err) {
            return err
        }
    }
    ,
    async updateUser(userId, userObject) {
        try {
            let user = await
                connection('TB_Usuario')
                    .where('IDUsuario', userId)
                    .update(userObject)
            return user
        } catch (error) {
            return error
        }
    },


    async deleteUser(userId) {
        try {
            let user = await
                connection('TB_Usuario')
                    .where('IDUsuario', userId)
                    .del()
            return user
        } catch (error) {
            return error
        }
    }


}