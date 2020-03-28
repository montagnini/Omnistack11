//Obtém a conexão.
const connection = require('../database/connection');

//Exporta s rotas de incidente.
module.exports = {
    //Cria rota para listar os incidentes.
    async index(request, response) {
        //Obtém pagina 1 como padrão.
        const { page = 1 } = request.query;
        //Obtém quantidade de arquivos de incidentes.
        const [count] = await connection('incidents')
            .count();
        //Obtém lista de incidentes pelo identificador da ong e páginado.
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']);
        //Obtém quantidade de incidentes existem naquela ong.
        response.header('X-Total-Count', count['count(*)']);
        //Retorna os incidentes.
        return response.json(incidents);
    },
    //Cria rota para criação os incidentes.
    async create(request, response) {
        //Obtém o titulo, descrição e valor através do corpo da requisição.
        const { title, description, value } = request.body;
        //Obtém qual ong está logada (criando rota).
        const ong_id = request.headers.authorization;
        //Retorna array com todos os ids retornados (se for uma lista no insert).
        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
        //Retorna o incidente criado.
        return response.json({ result });
    },

    //Cria rota para deletar um incidente.
    async delete(request, response) {
        //Obtém qual identificador do incidente a ser deletado.
        const { id } = request.params;
        //Obtém qual ong está logada (excluindo uma rota).
        const ong_id = request.headers.authorization;
        //Obtém um incidente baseado no identificador.
        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        //Verifica se a ong logada é a ong que está operando a exclusão.
        if (incident.ong_id != ong_id) {
            //Retorna o status de operação não permitida caso a ong logada não seja a ong criadora.
            return response.status(401).json({ error: 'Operation not Permited.' });
        }
        //Deleta o incidente selecionado.
        await connection('incidents').where('id', id).delete();
        //Retorna um status vazio.
        return response.status(204).send();
    }
}