import { reqProp, resProp } from './types'
import usersController from './usersController'

const usersRouter = (req: reqProp, res: resProp) => {
  const { url, method } = req

  switch (method) {
    case 'GET': {
      if (!url?.split('/')[2]) {
        usersController.getAllUsers(req, res)
        break
      }
      throw new Error('')
    }
    case 'POST': {
      usersController.createUser(req, res)
      break
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Endpoint not found' }))
      break
    }
  }
}

export default usersRouter
