
const connection = require('../database/config')

module.exports = {

    async findAll() {

        try {
            const user = await
                connection('TB_Usuario as u')
                    .innerJoin('TB_Perfil as p', 'u.IDPerfil', '=', 'p.IDPerfil')
                    .select(
                        'u.IDUsuario',
                        'u.Login as Login',
                        'u.Nome',
                        'u.Senha as password',
                        'u.Status as state',
                        'u.IDPerfil as perfil',
                        'p.Descricao as description'
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
            return user[0];
        } catch (err) {
            return err;
        }


    },
    async findUserById(idUser) {
        console.log(idUser);
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

                        console.log(user);
            return user[0]
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

            console.log(user)
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

        console.log(userId)
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