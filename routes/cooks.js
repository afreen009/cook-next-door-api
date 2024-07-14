import express from "express";
import * as cooksController from "../controllers/cooks-controllers.js";

const router = express.Router();

router.route("/").get(cooksController.getAllCooks);

export default router;