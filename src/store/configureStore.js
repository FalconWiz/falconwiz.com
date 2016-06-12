import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from '../reducers'

const defaultState = {
  test: {
    active: false
  }
}

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension())

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
