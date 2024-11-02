import express from "express";
import { storage } from "./modules/config/multerConfig.js";
import multer from "multer";
import env from "dotenv";
import ProjectRouter from "./modules/routes/ProjectRouter.js";
import AuthRouter from "./modules/routes/AuthRouter.js";
import createUserDataAdmin from "./modules/db/User/initialUser.js";
import createProjectDataTest from "./modules/db/Project/initialProject.js";
import setupAssociations from "./modules/db/setupAssociation.js";
import { connectDB } from "./modules/config/dbConfig.js";

// Configurações
env.config();
const upload = multer({ storage: storage });
const app = express();
app.use(express.json());

// Rotas
app.use(ProjectRouter);
app.use(AuthRouter);

// Database
connectDB();
setupAssociations();

await createUserDataAdmin();
await createProjectDataTest();


app.get("/status", (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "The server is running."
    });
});

app.listen(process.env.PORT, () => {
    console.log(`The server is running. http://localhost:${process.env.PORT}`);
})
