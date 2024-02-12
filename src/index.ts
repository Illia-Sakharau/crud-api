import http from 'http'
import usersRouter from './usersRouter'
import 'dotenv/config'

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  try {
    const { url } = req

    switch (url?.split('/')[1]) {
      case 'users': {
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
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Internal Server Error' }))
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
