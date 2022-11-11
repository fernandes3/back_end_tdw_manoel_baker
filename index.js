const express = require('express');
const app = express();
const port = 3001;
var cors = require('cors');



const productRouter = require('./src/routes/product_router');
const bodyParser = require('body-parser');

//Import das rotas
const categoryRouter = require('./src/routes/category_router');
const perfilRouter = require('./src/routes/perfil_router');
const unidadeMedidaRouter = require('./src/routes/unidade_medida_router');
const comandaRouter = require('./src/routes/comanda_router');
const itemComandaRouter = require('./src/routes/itemComanda_router');
const movimentoRouter = require('./src/routes/movimento_router');
const userRouter = require('./src/routes/user_router');


app.use(bodyParser.json()); //Necessário para pegar o corpo da requisicao
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use('/product', productRouter);

//Rotas que serão usadas
app.use('/movimento', movimentoRouter);
app.use('/comanda', comandaRouter);

app.use('/category', categoryRouter);
app.use('/perfil', perfilRouter);
app.use('/unidadeMedida', unidadeMedidaRouter);
app.use('/itemComanda', itemComandaRouter);
app.use('/user', userRouter);



app.listen(port, function (err) {
    if (err) {
        console.log('Ocorreu um erro ao iniciar o servidor');
    } else {
        console.log('Servidor iniciado com sucesso na porta ' + port);
    }
})