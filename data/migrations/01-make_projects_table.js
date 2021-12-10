exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments();

    tbl.string("project_id", 17).notNullable().unique();

    tbl.string("project_name", 128).notNullable();

    tbl.string("project_description", 128);

    tbl.string("project_completed", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
