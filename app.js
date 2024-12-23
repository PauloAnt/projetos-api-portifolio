import express from "express";
import env from "dotenv";
import ProjectRouter from "./modules/routes/ProjectRouter.js";
import AuthRouter from "./modules/routes/AuthRouter.js";
import cors from "cors";

// Configurações
env.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

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