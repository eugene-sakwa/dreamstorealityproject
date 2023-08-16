import { users, mentors } from './seedData'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  for (let user of users) {
    await prisma.user.create({
      data: user,
    })
  }
  for (let mentor of mentors){
    await prisma.mentor.create({
      data: mentor,
    })
  }
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
