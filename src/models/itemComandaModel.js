const connection = require('../database/config');


module.exports = {

    async findAll() {

        try {
            var items = await
                connection('TB_Item_Comanda as i')
                    .innerJoin('TB_Comanda as c', 'i.IDComanda', "=", 'c.IDComanda')
                    .select('*')


        } catch (err) {
            console.log(err);
        }
        return items;
    }
    ,
    async findItemComandaById(itemComandaId) {

        try {
            var items = await
                connection('TB_Item_Comanda as i')
                    .innerJoin('TB_Comanda as c', 'i.IDComanda', "=", 'c.IDComanda')
                    .select('*')
                    .where('IDItemComanda', itemComandaId)


        } catch (err) {
            console.log(err);
        }
        return items;
    }
    ,

    async insertItemComanda(itemComanda) {

        try {
            var item = await
                connection('TB_Item_Comanda')
                    .insert(itemComanda);
            return item;
        } catch (err) {
            console.log(err)
        }

    }
    ,
    async updateItemComanda(itemComandaId, itemComanda) {
        try {
            var item = await
                connection('TB_Item_Comanda')
                    .where('IDItemComanda', itemComandaId)
                    .update(itemComanda);
            return item

        } catch (err) {
            return err
        }

    },


    async deleteItemComanda(itemComandaId) {
        try {
            var itemComanda = await
                connection('TB_Item_Comanda')
                    .where('IDItemComanda', itemComandaId).del();

            console.log(itemComanda)
            return itemComanda
        } catch (err) {
            console.log(err)
        }
    }


}