import express from "express";
import branchesController from "../controllers/branchesController";
import registeremployeesController from "../controllers/registerEmployees.js";
const router = express.Router();



router.route("/")
post(registeremployeesController.register)

export default router;