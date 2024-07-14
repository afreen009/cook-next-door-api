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
const getCooksById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("cooks")
      .join("menu_items", "menu_items.cook_id", "cooks.id")
      .select(
        "menu_items.food_id",
        "menu_items.food_url",
        "menu_items.menu_name",
        "menu_items.rating",
        "menu_items.price",
        "menu_items.description"
      )
      .where("cooks.id", id);

    if (!data || data.length == 0) {
      return res.status(404).send(`cook with ID ${id} not found`);
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(`Error retrieving single cook: ${err}`);
  }
};
// {
// const categories = req.query.categories;
// const userLat = parseFloat(req.query.lat);
// const userLong = parseFloat(req.query.long);
// const radius = parseFloat(req.query.radius);
// console.log;

// if (!categories || !userLat || !userLong || !radius) {
//   return res
//     .status(400)
//     .json({ error: "Categories, lat, long, and radius are required" });
// }

// const categoryArray = categories.split(",");

// if (!categories) {
//   return res.status(400).json({ error: "Categories are required" });
// }

// try {
//   const menuItems = await knex("menu_items")
//     .join("cooks", "menu_items.cook_id", "cooks.id")
//     .select("cooks.*")
//     .where(function () {
//       categoryArray.forEach((category) => {
//         this.orWhere("cooks.categories", "like", `%${category}%`);
//       });
//     });

//   res.json(menuItems);
// } catch (error) {
//   res.status(500).json({ error: "Internal Server Error" });
// }
// };
const getAllLocation = async (req, res) => {
  try {
    const allLocation = await knex.select("lat", "long").from("cooks");
    res.json(allLocation);
  } catch (error) {}
};

export { getAllCooks, getCooksById, getAllLocation };
