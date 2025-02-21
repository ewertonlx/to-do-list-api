import express, { urlencoded } from "express";
import dotenv from "dotenv";
import routerMain from "./routes/routerMain";
import helmet from "helmet";

dotenv.config();
const server = express();


server.use(helmet())
server.use(express.json());
server.use(urlencoded({ extended: true }));

server.use(routerMain)
server.use((req, res) => {
    res.status(404).json({ error: "404! Rota não encontrada no sistema." });
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running in http://localhost:${process.env.PORT}`)
})