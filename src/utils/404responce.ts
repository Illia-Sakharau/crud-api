import { resProp } from '../types'

export const return404 = (res: resProp) => {
  res.writeHead(404, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ error: 'Endpoint not found' }))
}
