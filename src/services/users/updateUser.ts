import { prisma } from "../../libs/prisma"

interface UserParams {
   id: number,
   name?: string,
   email?: string 
}
export const updateUser = async ({id, name, email}: UserParams) => {
    const userUpdated = await prisma.user.update({
        where: {
            id
        },
        data: { name, email }
    });
    return userUpdated;
}