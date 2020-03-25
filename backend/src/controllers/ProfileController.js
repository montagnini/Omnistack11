//Obtém o módulo de conexão com o DB.
const connection = require('../database/connection');
//Exporta as rotas.
module.exports = {
    //Cria rota para retornar os incidentes baseado em uma ong.
    async index(request, response) {
        //Obtém o identificador da ong logada.
        const ong_id = request.headers.authorization;
        //Obtém os incidentes da ong.
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
        //retorna todos os incidentes.
        return response.json(incidents);
    }
};