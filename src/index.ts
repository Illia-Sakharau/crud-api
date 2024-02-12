import http from 'http'
import usersRouter from './usersRouter'
import 'dotenv/config'
import { return404 } from './utils/404responce'

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  try {
    const { url } = req;
    const urlArr = url?.split('/') as string[];

    switch (`${urlArr[1]}/${urlArr[2]}`) {
      case 'api/users': {
        usersRouter(req, res)
        break
      }
      default: {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Endpoint not found' }))
        break
      }
    }
  } catch (_) {
    return404(res)
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
