import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createOne = async (
  userName: string,
  email: string,
  password: string,
  salt: string
) => {
  const newUser = await prisma.user.create({
    data: {
      userName,
      email,
      password,
      salt,
    },
  })
  return newUser
}

const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany({
    include: {
      mentor: true,
    },
  })
  return allUsers
}

const getUser = async (userName: string) => {
  const user = await prisma.user.findUnique({
    where: {
      userName: userName,
    },
  })
  return user
}

export const userModel = {
  createOne,
  getAllUsers,
  getUser,
}
