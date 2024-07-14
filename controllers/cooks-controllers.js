import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getAllCooks = async (_req, res) => {
  try {
    const cooks = await knex("cooks").select("*");
    for (let i = 0; i < cooks.length; i++) {
      const menu_items = await knex("menu_items")
        .select("*")
        .where("cook_id", cooks[i].id);
      cooks[i]["menu_items"] = menu_items;
    }

    res.json(cooks);
  } catch (err) {
    res.status(400).send(`Error retrieving list of cooks: ${err}`);
  }
};

export { getAllCooks };
