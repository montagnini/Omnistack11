//Obtém o módulo knex.
const knex = require('knex');
//Obtém o arquivo de configuração do knex.
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
//Obtém a conexão com o banco de dev.
const connection = knex(config);
//Exporta a coneção.
module.exports = connection;