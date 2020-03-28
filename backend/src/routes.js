//Obtém express
const express = require('express');
//Obtém biblioteca para validações.
const { celebrate, Segments, Joi } = require('celebrate');
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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

//Cria a rota para obter perfil.
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

//Cria a rota para obter os incidentes.
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().min(1),
    })
}), IncidentController.index);
//Cria a rota para criar um novo incidente. 
routes.post('/incidents', IncidentController.create);
//Cria a rota para deletar um incidente.
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete);

module.exports = routes;

/**
 * npm install celebrate -> validações das rotas (framework express).
 * Porque fazer testes?
 * Garantia de tudo estar funcionando  após fazer alterações no código. (Várias páginas)
 * TDD (Test-driven Development): Primeiro fazer os testes e só após os testes estarem prontos
 * desenvolver o código (Como se fosse um manual das regras de negócio para funcionamento correto).
 * npm install jest -> criação de testes automatizados da aplicação. (npx jest --init)
 * 
 * Testes unitarios: Testa um pedaço da aplicação de forma isolada.
 * Testes de integração: Testes que testam o fluxo completo de uma rota da aplicação.
 * arquivos teste precisam terminar com .spec.js
 */