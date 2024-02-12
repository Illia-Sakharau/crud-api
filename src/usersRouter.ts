import { reqProp, resProp } from './types'
import usersController from './usersController'
import { return404 } from './utils/responceErrors'

const usersRouter = (req: reqProp, res: resProp) => {
  const { url, method } = req
  const isRoot = !url?.split('/')[3]
  const urlLength = url?.split('/').length

  switch (method) {
    case 'GET': {
      if (isRoot) {
        usersController.getAllUsers(req, res)
        break
      } else if (urlLength === 4) {
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
    case 'PUT': {
      if (urlLength === 4) {
        usersController.updateUser(req, res)
        break
      }
      return404(res)
      break
    }
    case 'DELETE': {
      if (urlLength === 4) {
        usersController.deleteUser(req, res)
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
