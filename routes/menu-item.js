import express from "express";
import * as foodItemController from "../controllers/menu-item-controllers.js";

const router = express.Router();

router.route("/").get(foodItemController.getAllFoodItems);

export default router;
