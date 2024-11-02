import { Router } from "express";
import AuthController from "../Controllers/AuthController.js";


const router = new Router();
const authController = new AuthController();

router.post("/api/login", (req, res) => authController.login(req, res));

export default router;