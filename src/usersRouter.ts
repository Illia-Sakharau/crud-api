import { reqProp, resProp } from './types'
import usersController from './usersController'

const usersRouter = (req: reqProp, res: resProp) => {
  const { url, method } = req

  switch (method) {
    case 'GET': {
      if (!url?.split('/')[2]) {
        usersController.getAllUsers(req, res)
      }
      break
    }
    default: {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(
        JSON.stringify({
          data: { err: '1234' },
        }),
      )
      break
    }
  }
}

export default usersRouter
