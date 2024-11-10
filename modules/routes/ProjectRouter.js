import { Router } from "express";
import ProjectController from "../Controllers/ProjectController.js";
import checkedToken from "../middleware/checkToken.js";
import multer from "multer";

const router = new Router();
let controller = new ProjectController();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/api/project", (req, res) => controller.findAll(req, res));

router.get("/api/project/:id", checkedToken, (req, res) => controller.findById(req, res));

router.post("/api/project", checkedToken, upload.single('image'), (req, res) => controller.insert(req, res));

router.delete("/api/project/:id", checkedToken, (req, res) => controller.delete(req, res));


export default router;
