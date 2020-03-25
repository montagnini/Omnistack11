//Obtém o módulo knex.
const knex = require('knex');
//Obtém o arquivo de configuração do knex.
const configuration = require('../../knexfile');
//Obtém a conexão com o banco de dev.
const connection = knex(configuration.development);
//Exporta a coneção.
module.exports = connection;