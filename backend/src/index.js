const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


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