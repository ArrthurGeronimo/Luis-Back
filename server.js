const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express()

//Permite o envio de dados para a aplicação no formato de Json
app.use(express.json());
app.use(cors(/* IP */));

//Iniciando o DB
mongoose.connect(
	'mongodb+srv://ciia:p4lF8lLSuhcZ2igA@ciia-banco-de-teste-2ndoa.mongodb.net/test',
	{ useNewUrlParser: true, useUnifiedTopology: true }
);
//Testando DB
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded")
});

requireDir('./src/models');

//"use" aceita todos os tipos de requisição
app.use('/', require("./src/routes"));

let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Servidor funcionando em ' + port);
});