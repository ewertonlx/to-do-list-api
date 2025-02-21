import { prisma } from "../../libs/prisma";

export const createTask = async (title: string, userId: number , description?: string) => {
    const task = await prisma.task.create({
        data: {
            title,
            userId,
            description,
        }
    });
    return task;
}