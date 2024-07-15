export function up(knex) {
  return knex.schema.createTable("cooks", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("delivery_options").notNullable();
    table.decimal("lat", 9, 6).notNullable();
    table.decimal("long", 9, 6).notNullable();
    table.string("avatar").notNullable();
    table.string("categories").notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable("cooks");
}
