import { RequestHandler } from 'express'
import { mentorModel } from '../models/mentorModel'

const registerNewMentor: RequestHandler = async (req, res) => {
  console.log('I am here')
  try {
    const id = req.params.userId
    const {
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
    } = req.body

    // if (!userName || !email || !password) {
    //   return res
    //     .status(400)
    //     .json({ error: 'userName, email, and password are required' })
    // } else if (password.length < 8) {
    //   return res
    //     .status(400)
    //     .json({ error: 'The password needs to be 8 or more characters' })
    // } else if (!email.includes('@')) {
    //   return res.status(400).json({ error: 'Invalid email format' })
    // }
    const user = await mentorModel.createOne(
      parseInt(id),
      firstName,
      lastName,
      title,
      industry,
      bio,
      primaryContact,
      location,
      availability,
      skillsTags,
      roleDescription
    )

    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res
      .status(400)
      .json({ error: 'Error registering mentor: ${error.message}' })
  }
}

const getAllMentors: RequestHandler =async ( _, res) => {
  const mentors = await mentorModel.getAllMentors();
  res.status(200).json(mentors)
}

export const mentorsController = {
  registerNewMentor,
  getAllMentors
}
