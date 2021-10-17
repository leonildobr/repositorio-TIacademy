const express = require('express');
const cors = require('cors');

const {sequelize} = require('./models');

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get('/', function (req, res){
    res.send('Olá, Bem vindo a nossa empresa')
});

app.post('/servicos', async(req,res) => {
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Servico criado sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "foi impossivel se conectar."
        });
    });
});

app.post('/clientes', async(req,res) => {
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Cliente inserido com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "foi impossivel se conectar."
        });
    });
});

app.post('/pedidos', async(req,res) => {
    await pedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Pedido feito com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "foi impossivel se conectar."
        });
    });
});

app.post('/itenspedido', async(req, res) => {
    await itempedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "item criado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message:"foi impossivel se conectar."
        });
    });
});

app.get('/listaservicos', async(req, res)=>{
    await servico.findALL({
        order: [['nome','ASC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertaservicos', async(req, res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    });
});

app.get('/servico/:id', async(req,res)=>{
    await servico.findByPk(req.params.id)
    .then(serv =>{
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possivel conectar"
        });
    });
});

app.put('/atualizaservico', async(req,res)=>{
    await servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "servico foi alterado com sucesso!"
        });
    }).cath(function(erro){
        return res.status(400).json({
            error: true,
            message: "erro na alteração do serviço"
        });
    });
});

app.get('/pedidos/:id', async(req, res)=>{
    await pedido.findByPk(req.param.id,{include:[{all: true}]}).then(ped=>{
        return res.json({ped});
    })
})

app.get('/excluircliente/:id', async(req, res)=>{
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente doi excluido com sucesso!"
        });
    }).cath(function(erro){
        return res.status(400).json({
            error: true,
            message: "erro ao excluir cliente,"
        });
    });
});

let port = process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})