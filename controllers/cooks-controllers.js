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

// formula to calculate distance between two points on the Earth
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const getFilteredCooks = async (req, res) => {
  try {
    const categories = req.query.categories;
    const userLat = parseFloat(req.query.lat);
    const userLong = parseFloat(req.query.long);
    const radius = parseFloat(req.query.radius);

    if (!categories || isNaN(userLat) || isNaN(userLong) || isNaN(radius)) {
      return res.status(400).json({
        error:
          "Categories, lat, long, and radius are required and must be valid numbers",
      });
    }

    const categoryArray = categories.split(",");

    // Filter cooks by categories
    const filteredByCategory = cooks.filter((cook) => {
      const cookCategories = cook.categories.split(",");
      return categoryArray.every((category) =>
        cookCategories.includes(category)
      );
    });

    // filter by distance
    const filteredCooks = filteredByCategory.filter((cook) => {
      const distance = getDistanceFromLatLonInKm(
        userLat,
        userLong,
        cook.lat,
        cook.long
      );
      return distance <= radius / 1000; // Convert radius to km
    });

    res.json(filteredCooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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

export { getAllCooks, getFilteredCooks };
