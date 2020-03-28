//Obtém o módulo de conexões com o BD.
const connection = require('../database/connection');
//Obtém função geradora de id único.
const generateId = require('../utils/generateUniqueId');


//Exporta as rotas.
module.exports = {
    //Cria rota de retorno de ongs.
    async index(request, response){
            //Realiza consulta no bd.
            const ongs = await connection('ongs').select('*');
            //Retorna todas as ongs.
            return response.json(ongs);
    },
    //Cria rota para criar uma ong.
    async create(request, response){
        //Obtém todos as informações informadas no campo de criação.
        const {name, email, whatsapp, city, uf} = request.body;
        //Cria um identificador único e randomico.
        const id = generateId();
        //Insere no banco o novo registro da ong.
        await connection('ongs').insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        })
        //Retorna o identificador gerado (utilizado para acesso).
        return response.json({ id });
    }
}