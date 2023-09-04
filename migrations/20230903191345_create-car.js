/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('cars', function (table) {
    table.increments()
    table.integer('modelo').notNullable()
    table.integer('ano').notNullable()
    table.integer('placa').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable('cars')
};
