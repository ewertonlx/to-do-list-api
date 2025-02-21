import { prisma } from "../../libs/prisma"

export const getAllTasks = async (idUser: number) => {
    const tasks = await prisma.task.findMany({
        where: {
          userId: idUser,
        },
    });
    return tasks;
}