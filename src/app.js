import { Render, Router, Route, IndexRoute, browserHistory } from 'jumpsuit'

import Index from './containers/index'
import About from './containers/about'
import Home from './containers/home'
// import Projects from './containers/projects'
// import Resume from './containers/resume'

// <Route path='projects' component={Projects} />
// <Route path='resume' component={Resume} />

Render({}, (
  <Router history={browserHistory}>
    <Route path='/' component={Index}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
    </Route>
  </Router>
))
