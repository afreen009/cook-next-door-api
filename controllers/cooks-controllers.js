import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getCategories = async (_req, res) => {
  try {
    const categories = await knex("inventories").distinct(
      "inventories.category"
    );
    const categoryNames = categories.map((category) => category.category);

    res.status(200).json(categoryNames);
  } catch (err) {
    res.status(400).send(`Error retrieving list of categories: ${err}`);
  }
};

export { getCategories };
