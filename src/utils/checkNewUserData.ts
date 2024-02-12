import { ReqNewUserData } from '../types'

export const isCorrectNewUserData = (
  value: ReqNewUserData,
): value is ReqNewUserData => {
  return (
    typeof value.username === 'string' &&
    typeof value.age === 'number' &&
    Array.isArray(value.hobbies) &&
    value.hobbies.every((hobby) => typeof hobby === 'string')
  )
}