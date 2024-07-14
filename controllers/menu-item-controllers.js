import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getAllFoodItems = async (_req, res) => {
  try {
    const menu_items = await knex("menu_items").join(
      "cooks",
      "cooks.id",
      "menu_items.food_id"
    );
    // const menu_items = await knex("menu_items").select("*");
    res.json(menu_items);
  } catch (err) {
    res.status(400).send(`Error retrieving list of menu: ${err}`);
  }
};

export { getAllFoodItems };
