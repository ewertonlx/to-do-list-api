import { prisma } from "../../libs/prisma"

export const getUser = async (id:number) => {
    const user = prisma.user.findUnique({
        where: {
            id
        }
    });
    return user;
}