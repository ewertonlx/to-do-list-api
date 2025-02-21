import { prisma } from "../../libs/prisma"

export const deleteUser = async(id: number) => {
    await prisma.user.delete({
        where: {
            id
        }
    })
}