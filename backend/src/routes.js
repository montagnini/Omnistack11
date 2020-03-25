//Obtém express
const express = require('express');
//Obtém o objeto de controle de Ongs
const OngController = require('./controllers/OngController');
//Obtém objeto de controle de incidentes.
const IncidentController = require('./controllers/IncidentController');
//Obtém objeto de controle de perfil.
const ProfileController = require('./controllers/ProfileController');
//Obtém objeto de controle de sessão (login)
const SessionController = require('./controllers/SessionController');
//Obtpem as rotas da URL.
const routes = express.Router();
//Cria a rota de criar sessão (logar).
routes.post('/sessions', SessionController.create);

//Cria a rota para obter as ongs. 
routes.get('/ongs', OngController.index);
//Cria a rota para criar uma ong.
routes.post('/ongs', OngController.create);

//Cria a rota para obter perfil.
routes.get('/profile', ProfileController.index);

//Cria a rota para obter os incidentes.
routes.get('/incidents', IncidentController.index);
//Cria a rota para criar um novo incidente. 
routes.post('/incidents', IncidentController.create);
//Cria a rota para deletar um incidente.
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;