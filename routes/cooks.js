import express from "express";
import * as cooksController from "./../controllers/cooks-controller.js";

const router = express.Router();

router.route("/").get(cooksController.getcooks);

export default router;