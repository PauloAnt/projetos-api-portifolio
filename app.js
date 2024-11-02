import express from "express";
import { storage } from "./modules/config/multerConfig.js";
import multer from "multer";
import env from "dotenv";
import ProjectRouter from "./modules/routes/ProjectRouter.js";
import AuthRouter from "./modules/routes/AuthRouter.js";
import createProjectTest from "./modules/db/Project/initialProject.js";

// Configurações
env.config();
const upload = multer({ storage: storage });
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Rotas
app.use(ProjectRouter);
app.use(AuthRouter);


app.get("/status", (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "The server is running."
    });
});

app.listen(PORT, () => {
    console.log(`The server is running. http://localhost:${PORT}`);
})

export default app;