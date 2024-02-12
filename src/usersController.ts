import { reqProp, resProp, User } from './types'
import { v4 as uuidv4, validate } from 'uuid'
import { isCorrectNewUserData } from './utils/checkNewUserData'

const users: User[] = []

class usersController {
  async getAllUsers(_req: reqProp, res: resProp) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(users))
  }

  async getUserById(req: reqProp, res: resProp) {
    const userId = req.url?.split('/')[2] as string;

    if (!validate(userId)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid user ID format' }));
      return;
    }

    const user = users.find(({ id }) => id === userId)
    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(user))
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(
        JSON.stringify({ error: 'The user with this ID does not exist' }),
      )
    }
  }

  async createUser(req: reqProp, res: resProp) {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      const newUserData = JSON.parse(body)
      if (isCorrectNewUserData(newUserData)) {
        const newUser: User = {
          id: uuidv4(),
          ...newUserData,
        }
        users.push(newUser)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(newUser))
      } else {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(
          JSON.stringify({
            error:
              'Incorrect user information. Username, age and hobbies are required fields',
          }),
        )
      }
    })
  }

}

export default new usersController()
