//Obtém o módulo express.
const express = require('express');
//Obtém o módulo cors. (segurança)
const cors = require('cors');
//Obtém o módulo de erros ao validar uma rota.
const {errors} = require('celebrate');
//Obtém o módulo de rotas.
const routes = require('./routes');

//Inicializa o express.
const app = express();

//Inicializa o cors.
app.use(cors());
app.use(express.json());
//Utiliza as rotas.
app.use(routes);
//Obtém o erro de validação (se houver).
app.use(errors());

//Exporta o app.
module.exports = app;

/**
 * Métodos HTTP:
 * 
 * get: Buscar/listar uma informação no back-end;
 * post: adicionar uma informação no back-end;
 * put: atualizaa uma informação no back-end;
 * delete: deleta uma informação no back-end;
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação);
  * Route Params: Parâmetros utilizados para indentificar recursos;
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL SERVER
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */