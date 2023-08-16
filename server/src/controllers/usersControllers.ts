import { RequestHandler } from 'express'
import { userModel } from '../models/userModel'

const registerNewUser: RequestHandler = async (req, res) => {
  try {
    const { userName, email, password, salt } = req.body

    if (!userName || !email || !password) {
      throw new Error('userName, email, and password are required')
    } else if (password.length < 8) {
      throw new Error('The password needs to be 8 or more characters')
    } else if (!email.includes('@')) {
      throw new Error('Invalid email format')
    }
    const user = await userModel.createOne(userName, email, password, salt)

    res.status(201).json(user)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message)
    }
  }
}

const getAllUsers: RequestHandler = async (_, res) => {
  const users = await userModel.getAllUsers()
  res.status(200).json(users)
}

const getUser: RequestHandler = async (req, res) => {
  const { userName } = req.body
  const user = await userModel.getUser(userName)
  if (!user) {
    res.status(400)
  }

  const response = { username: user?.userName, password: user?.password }
  res.status(200).json(response)
}

export const usersController = {
  registerNewUser,
  getAllUsers,
  getUser,
}
