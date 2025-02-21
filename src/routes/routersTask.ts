import { Router } from "express";
import { createTask } from "../services/tasks/createTask";
import { getTask } from "../services/tasks/getTask";
import { deleteTask } from "../services/tasks/deleteTask";
import { updateTask } from "../services/tasks/updateTask";

const routerTask = Router();


routerTask.post('/' , async (req, res) => {
    const {title, userId, description} = req.body;
    const task = await createTask(title, parseInt(userId), description);
    if(task) res.status(201).json({sucess: "Task criada com sucesso!"});
});

routerTask.get('/:id', async (req, res) => {
    const {id} = req.params;
    const task = await getTask(parseInt(id))
    res.status(200).json(task);
});

routerTask.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await deleteTask(parseInt(id));
    res.status(200).json({sucess: "Task deletada com sucesso!"});
});

routerTask.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const {title, description, completed} = req.body;
    const taskUpdated = await updateTask({id, title, description, completed})
    res.status(200).json(taskUpdated);
})

export default routerTask;