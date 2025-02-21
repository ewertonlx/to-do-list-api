import { prisma } from "../../libs/prisma"

export const createUser = async (name: string, email: string) => {
    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    });
    return user;
}