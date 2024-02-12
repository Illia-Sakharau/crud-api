import http from 'http'

export type reqProp = http.IncomingMessage
export type resProp = http.ServerResponse<http.IncomingMessage> & {
  req: http.IncomingMessage
}
