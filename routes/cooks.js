import express from "express";
import * as cooksController from "../controllers/cooks-controllers.js";

const router = express.Router();

router.route("/").get(cooksController.getAllCooks);
router.route("/:id").get(cooksController.getCooksById);
router.route("/allLocation").get(cooksController.getAllLocation);
export default router;
