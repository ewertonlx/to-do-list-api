import { Router } from "express";
import routerTask from "./routersTask";
import routerUser from "./routerUser";

const routerMain = Router();

routerMain.get('/', (req, res) => {
    res.json({message: "Hello World!"});
});

routerMain.use('/task', routerTask);
routerMain.use('/user', routerUser);

export default routerMain;