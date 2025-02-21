import { prisma } from "../../libs/prisma"

export const deleteTask = async (id: number): Promise<void> => {
    await prisma.task.delete({
        where: {
            id
        }
    });
}