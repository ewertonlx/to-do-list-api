import { prisma } from "../../libs/prisma"

export const getTask = async (id: number) => {
    const task = await prisma.task.findUnique({
        where: {
            id
        }
    });
    return task;
}