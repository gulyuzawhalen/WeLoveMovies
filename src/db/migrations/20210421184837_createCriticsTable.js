exports.up = function(knex) {
  return knex.schema.createTable("critics", (table) => {
      table.increments("critic_id").primary();
      table.string("preferred_name");
      table.string("surname");
      table.string("organization_name");
      table.timestamps(true, true);

  });
};
// 1. guluyza code order
exports.down = function(knex) {
  return knex.schema.dropTable("critics");
};

// 2. thinkful code order
// return knex.schema.createTable("critics", (table) => {
//   table.increments("critic_id");
//   table.string("preferred_name");
//   table.string("surname");
//   table.string("organization_name");
//   table.timestamps(true, true);
// });