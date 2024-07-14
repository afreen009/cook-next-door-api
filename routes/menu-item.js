import express from "express";
import * as foodItemController from "../controllers/menu-item-controllers.js";

const router = express.Router();
console.log("11111111111");
router.route("/").get(foodItemController.getAllFoodItems);

export default router;
