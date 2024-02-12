import http from 'http'
import usersRouter from './usersRouter'
import 'dotenv/config'
import { return404, return500 } from './utils/responceErrors'

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  try {
    const { url } = req
    const urlArr = url?.split('/') as string[]

    switch (`${urlArr[1]}/${urlArr[2]}`) {
      case 'api/users': {
        usersRouter(req, res)
        break
      }
      default: {
        return404(res)
        break
      }
    }
  } catch (_) {
    return500(res)
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
