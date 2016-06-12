import { combineReducers } from 'redux'
import test from './testReducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  test,
  routing: routerReducer
})

export default rootReducer
