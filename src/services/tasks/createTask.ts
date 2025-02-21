import { prisma } from "../../libs/prisma";
import z from "zod";

const taskSchema = z.object({
    title: z.string(),
    userId: z.number(),
    description: z.string()
})
export const createTask = async (title: string, userId: number , description?: string) => {
    const validation = taskSchema.safeParse({title, userId, description});
    if(!validation.success) return {error: "Erro na validação dos dados."}
    const task = await prisma.task.create({
        data: {
            title,
            userId,
            description,
        }
    });
    return task;
}