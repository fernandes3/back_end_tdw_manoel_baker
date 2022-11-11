const connection = require('../database/config')


module.exports = {

    async findAll() {

        try {
            var comandas = await
                connection('TB_Comanda')
                    .innerJoin('TB_Item_Comanda', 'TB_Comanda.IDComanda', '=', 'TB_Item_Comanda.IDComanda')
                    .select('*')
        } catch (err) {
            console.log(err);
        }
        return comandas;
    }
    ,
    async findComandaById(comandaId) {
        try {
            var comandas = await
                connection('TB_Comanda as c')
                    .innerJoin('TB_Item_Comanda as i', 'c.IDComanda', '=', 'i.IDComanda')
                    .select('*')
                    .where('c.IDComanda', comandaId)


        } catch (err) {
            console.log(err);
        }

        return comandas;
    }
    ,

    async insertComanda(comanda) {
        try {
            var comandaX = await
                connection('TB_Comanda')
                    .insert(comanda);
            return comandaX;

        } catch (err) {
            console.log(err)
        }
    }
    ,
    async updateComanda(comandaId, comanda) {
        try {

            var comandaX = await
                connection('TB_Comanda')
                    .where('IDComanda', comandaId).update(comanda);

            console.log(comandaX)
            return comandaX
        } catch (err) {
            return err
        }

    },


    async deleteComanda(comandaId) {
        try {

            var itemComanda = await
                connection('TB_Item_Comanda')
                    .where('IDComanda', comandaId)
                    .del()
            var comanda = await
                connection('TB_Comanda')
                    .where('IDComanda', comandaId).del();

            console.log(comanda)
            return comanda
        } catch (err) {
            return err
        }
    }


}