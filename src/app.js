import { Render, Router, Route, IndexRoute } from 'jumpsuit'

import Index from './containers/index'
import About from './containers/about'
import Home from './containers/home'
import PageNotFound from './components/pageNotFound'
// import Projects from './containers/projects'

import modal from 'state/modal'

Render({ modal}, (
  <Router>
    <Route path='/' component={Index}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='*' component={PageNotFound} />
    </Route>
  </Router>
))
