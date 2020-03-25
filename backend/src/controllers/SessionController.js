//Obtém modulo de conexão com o DB.
const connection = require('../database/connection');
//Exporta as rotas.
module.exports = {
    //Cria rota para login
    async create(request, response) {
        //Obtém o login informado.
        const { id } = request.body;
        //Verifica se o login existe no banco de dados.
        const ong = await connection('ongs').where('id', id).select('name').first();
        //Verifica se o login existe.
        if (!ong) {
            //Caso não exista retorna um erro informando que a ONG não existe.
            return response.status(400).json({ error: 'No ONG found with this ID' });
        }
        //Retorna a ong obtida através do identificador.
        return response.json(ong);
    }

}