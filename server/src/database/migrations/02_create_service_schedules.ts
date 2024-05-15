import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('service_schedule', (table) => {
    table.increments('id').primary();

    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table
      .integer('services_id')
      .notNullable()
      .references('id')
      .inTable('services')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('service_schedule');
}
