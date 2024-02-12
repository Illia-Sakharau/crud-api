import { reqProp, resProp, User, ReqNewUserData } from './types'
import { v4 as uuidv4 } from 'uuid'

const users: User[] = []

const isCorrectNewUserData = (
  value: ReqNewUserData,
): value is ReqNewUserData => {
  return (
    typeof value.username === 'string' &&
    typeof value.age === 'number' &&
    Array.isArray(value.hobbies) &&
    value.hobbies.every((hobby) => typeof hobby === 'string')
  )
}

class usersController {
  async getAllUsers(_req: reqProp, res: resProp) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(users))
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
