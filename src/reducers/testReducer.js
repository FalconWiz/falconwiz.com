import { TEST_ACTION } from '../constants/ActionTypes'

export default function test (state = {}, action) {
  switch (action.type) {
    case TEST_ACTION:
      console.log('Wow, a test reducer!')
      return state

    default:
      return state
  }
}
