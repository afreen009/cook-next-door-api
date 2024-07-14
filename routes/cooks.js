import express from "express";
import * as cooksController from "../controllers/cooks-controllers.js";

const router = express.Router();

router.route("/").get(cooksController.getAllCooks);
router.route("/filter").get(cooksController.getFilteredCooks);
router.route("/allLocation").get(cooksController.getAllLocation);
export default router;
