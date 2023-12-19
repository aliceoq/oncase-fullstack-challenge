/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  console.log('Starting seed: Deleting existing data from "participants" table...');

  return knex('participants')
    .del()
    .then(() => {
      console.log('Seed: Existing data deleted successfully.');

      console.log('Inserting new data into "participants" table...');

      return knex('participants').insert([
        { name: 'Carlos', lastname: 'Moura', participation: 5 },
        { name: 'Fernanda', lastname: 'Oliveira', participation: 15 },
        { name: 'Hugo', lastname: 'Silva', participation: 20 },
        { name: 'Eliza', lastname: 'Souza', participation: 20 },
        { name: 'Anderson', lastname: 'Santos', participation: 20 },
      ]);
    })
    .then(() => {
      console.log('Seed completed successfully.');
    })
    .catch((error) => {
      console.error('Seed failed:', error);
    });
};
