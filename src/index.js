import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store/configureStore'
// react-router routes
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './containers/App'
// Needed for onTouchTap
injectTapEventPlugin()

const router = (
  <Provider store={store}>
    <Router
      history={history}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>
)

render(
  router,
  document.getElementById('app')
)
