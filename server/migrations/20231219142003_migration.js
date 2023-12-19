/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  console.log('Starting migration: Creating "participants" table...');

  await knex.schema.dropTableIfExists('participants');

  return knex.schema
    .createTable('participants', function (table) {
      table.increments('id').primary();
      table.string('name', 50).notNullable();
      table.string('lastname', 50).notNullable();
      table.integer('participation').notNullable();
      table.unique(['name', 'lastname']);
    })
    .then(() => {
      console.log('Migration: "participants" table created successfully.');
      return knex.seed.run();
    })
    .then(() => {
      console.log('Migration completed successfully.');
    })
    .catch((error) => {
      console.error('Migration failed:', error);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  console.log('Starting rollback: Dropping "participants" table...');

  return knex.schema.dropTableIfExists('participants')
    .then(() => {
      console.log('Rollback: "participants" table dropped successfully.');
    })
    .catch((error) => {
      console.error('Rollback failed:', error);
    });
};
