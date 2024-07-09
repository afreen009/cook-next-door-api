/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('cooks').del();
    await knex('cooks').insert([
        {
            "id": 1,
            "name": "Chef Alice",
            "delivery-options": "pick-up only",
            "lat": 22.22,
            "long": 77.44,
            "categories": [
                "veg",
                "non-veg",
                "halal"
            ],
            "menu": [
                {
                    "food_id": 1,
                    "name": "Pho",
                    "rating": 5,
                    "price": "$30",
                    "description": "Pho is a Vietnamese noodle soup consisting of broth, linguine-shaped"
                },
                {
                    "food_id": 2,
                    "name": "Spaghetti",
                    "rating": 4.5,
                    "price": "$40",
                    "description": "Spaghetti is a long, thin, solid, cylindrical pasta."
                },
                {
                    "food_id": 3,
                    "name": "Baklava",
                    "rating": 4.5,
                    "price": "$30",
                    "description": "Baklava is a rich, sweet pastry made of layers of filo"
                },
                {
                    "food_id": 4,
                    "name": "Pie",
                    "rating": 4.5,
                    "price": "$50",
                    "description": "Pie is a baked dish which is usually made of a pastry dough casing that"
                }
            ]
        }
    ]);
  };