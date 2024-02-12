import http from 'http'

export type reqProp = http.IncomingMessage
export type resProp = http.ServerResponse<http.IncomingMessage> & {
  req: http.IncomingMessage
}

export interface User {
  id: string
  username: string
  age: number
  hobbies: string[]
}

export interface ReqNewUserData extends Omit<User, 'id'> {}
