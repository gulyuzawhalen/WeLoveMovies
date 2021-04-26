exports.up = function(knex) {
    return knex.schema.createTable("movies_theaters", (table) => {
      table.integer("movie_id").unsigned().notNullable();
      table
        .foreign("movie_id")
        .references("movie_id")
        .inTable("movies")
        .onDelete("CASCADE");
      table.integer("theater_id").unsigned().notNullable();
      table
        .foreign("theater_id")
        .references("theater_id")
        .inTable("theaters")
        .onDelete("CASCADE");
      table.boolean("is_showing").de;
      table.timestamps(true, true);
    })
  };
  // 2. guluyza code order
  exports.down = function(knex) {
    return knex.schema.dropTable("movies_theaters");
  };
  
  
  // 5. thinkful code order
  // exports.up = function (knex) {
  //   return knex.schema.createTable("movies_theaters", (table) => {
  //     table.boolean("is_showing").defaultTo(false);
  //     table.timestamps(true, true);
  
  //     table.integer("movie_id").unsigned().notNullable();
  //     table.foreign("movie_id").references("movie_id").inTable("movies");
  
  //     table.integer("theater_id").unsigned().notNullable();
  //     table.foreign("theater_id").references("theater_id").inTable("theaters");
  //   });
  // };
  
  // exports.down = function (knex) {
  //   return knex.schema.dropTable("movies_theaters");
  // };
