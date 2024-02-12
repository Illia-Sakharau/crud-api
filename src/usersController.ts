import { reqProp, resProp } from './types'

class usersController {
  async getAllUsers(req: reqProp, res: resProp) {
    const { method, url } = req

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        data: { method, url },
      }),
    )
  }
}

export default new usersController()
