
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //Identificador único da tabela.
        table.increments();
        //Título do incidente.
        table.string('title').notNullable();
        //Descrição do incidente.
        table.string('description').notNullable();
        //Valor (em reais) do incidente
        table.decimal('value').notNullable();
        //Identificador único da ong que gerou o incidente.
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
