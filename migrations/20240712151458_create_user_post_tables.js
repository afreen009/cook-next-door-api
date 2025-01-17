export function up(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("email").notNullable().unique();
        table.string("username").notNullable();
        table.string("password").notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable("users");
}
