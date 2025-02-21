import { prisma } from "../../libs/prisma";
interface TaskParams {
    id: number,
    title?: string,
    description?: string,
    completed?: boolean,
};

export const updateTask = async ({id, title, description, completed}: TaskParams) => {
    const taskUpdated = await prisma.task.update({
        where: {
            id
        },
        data: {title, description, completed}
    });
    return taskUpdated;
}