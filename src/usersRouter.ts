import { reqProp, resProp } from './types'
import usersController from './usersController'
import { return404 } from './utils/404responce'

const usersRouter = (req: reqProp, res: resProp) => {
  const { url, method } = req
  const isRoot = !url?.split('/')[2];

  switch (method) {
    case 'GET': {
      if (isRoot) {
        usersController.getAllUsers(req, res)
        break
      } else if (url?.split('/').length === 3) {
        usersController.getUserById(req, res)
        break
      }
      return404(res)
      break
    }
    case 'POST': {
      if (isRoot) {
        usersController.createUser(req, res)
        break
      }
      return404(res)
      break
    }
    default: {
      return404(res)
      break
    }
  }
}

export default usersRouter
