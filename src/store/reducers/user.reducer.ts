import { AnyAction } from 'redux'

export default function userReducer(
  prevState = { email: null, token: null },
  action: AnyAction
) {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return action.payload
    case 'LOGOUT':
      return action.payload
    default:
      return prevState
  }
}
