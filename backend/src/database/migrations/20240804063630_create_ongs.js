/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//cria a tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//caso de algum problema...
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
