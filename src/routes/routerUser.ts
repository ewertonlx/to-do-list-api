import { Router } from "express";
import { getAllTasks } from "../services/tasks/getAlltTasks";
import { getUser } from "../services/users/getUser";
import { createUser } from "../services/users/createUser";
import { deleteUser } from "../services/users/deleteUser";
import { updateUser } from "../services/users/updateUser";
import { z } from "zod";

const routerUser = Router();

routerUser.get('/:idUser/tasks', async (req, res) => {
    const {idUser} = req.params
    const tasks = await getAllTasks(parseInt(idUser))
    res.status(200).json(tasks);
});

routerUser.get('/:idUser', async (req, res) => {
    const {idUser} = req.params;
    const user = await getUser(parseInt(idUser));
    res.status(200).json(user);
});

routerUser.post('/', async (req, res) => {
    const userSchema = z.object({
        name: z.string().min(2).max(80),
        email: z.string().email()
    })

    const {name, email} = req.body;
    const validation = userSchema.safeParse({name, email});
    if(!validation.success){
        res.status(400).json({error: "Erro na validação dos dados."});
        return;
    }
    const user = await createUser(name, email);
    if(user) res.status(201).json({sucess: "Usuário criado com sucesso!"})
});

routerUser.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await deleteUser(parseInt(id));
    res.status(200).json({sucess: "Usuário deletado com sucesso!"})
});

routerUser.patch('/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    const {name, email} = req.body;
    const userUpdated = await updateUser({id, name, email});
    res.status(200).json(userUpdated);
})

export default routerUser;