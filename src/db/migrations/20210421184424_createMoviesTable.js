exports.up = function(knex) {
  return knex.schema.createTable("movies", (table)=> {
    table.increments("movie_id").primary();
    table.string("title");
    table.integer("runtime_in_minutes").unsigned();
    table.string("rating");
    table.string("description");
    table.string("image_url");
    table.timestamps(true, true);
  })
};
// 3. guluyza code order
exports.down = function(knex) {
  return knex.schema.dropTable("movies");
};

// 1. thinkful code order
// return knex.schema.createTable("movies", (table) => {
//   table.increments("movie_id");
//   table.string("title");
//   table.integer("runtime_in_minutes");
//   table.enum("rating", ["G", "PG", "PG-13", "R", "NC-17", "NR"]);
//   table.text("description");
//   table.string("image_url");
//   table.timestamps(true, true);
// });
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