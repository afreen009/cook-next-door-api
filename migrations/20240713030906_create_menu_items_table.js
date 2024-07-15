export function up(knex) {
  return knex.schema.createTable("menu_items", (table) => {
    table.increments("food_id").primary();
    table.integer("cook_id").unsigned().notNullable();
    table.string("food_url").notNullable();
    table.string("menu_name").notNullable();
    table.decimal("rating", 2, 1).notNullable();
    table.string("price").notNullable();
    table.text("description").notNullable();
    table
      .foreign("cook_id")
      .references("id")
      .inTable("cooks")
      .onDelete("CASCADE");
  });
}

export function down(knex) {
  return knex.schema.dropTable("menu_items");
}
