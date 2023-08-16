import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { usersController } from './controllers/usersControllers'
import { mentorsController } from './controllers/mentorsController'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())

//List all users
app.get('/users', usersController.getAllUsers)

//Register a user
app.post('/register', usersController.registerNewUser)

//UserLogin

//Edit a user
//app.patch('/users/:userId', (req, res) => {})

//Delete a user
//app.delete('/users/:userId', (req, res) => {})

//List all mentors
app.get('/mentors', mentorsController.getAllMentors)

//Register a mentor
app.post('/registermentor', mentorsController.registerNewMentor)

app.post('/user', usersController.getUser)

//Edit a mentor
//app.patch('users/:userId/mentors/', (req, res) => {})

//Delete a mentor
//app.delete('/users/:userId/mentors/:mentorId', (req, res) => {})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

export default app
