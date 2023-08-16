import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createOne = async (
  id: number,
  firstName: string,
  lastName: string,
  title: string,
  industry: string,
  bio: string,
  primaryContact: string,
  location: string,
  availability: string,
  skillsTags: string[],
  roleDescription: string
) => {
  const newMentor = await prisma.user.update({
    where: { id: id },
    data: {
      mentor: {
        create: {
          firstName,
          lastName,
          title,
          industry,
          bio,
          primaryContact,
          location,
          availability,
          skillsTags,
          roleDescription,
        },
      },
    },
    include: {
      mentor: true,
    },
  })
  return newMentor
}

const getAllMentors = async () => {
  const allMentors = await prisma.mentor.findMany({
    // include: {
    //   mentor: true,
    // },
  })
  return allMentors
}

export const mentorModel = {
  createOne,
  getAllMentors
}
