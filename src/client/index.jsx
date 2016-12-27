'use strict'

global.React = require('react')
global.fetch = require('isomorphic-fetch')
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import PageNotFound from './components/PageNotFound.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }
  handleModalToggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  render () {
    return (
      <div>
        <div>
          <div id="content">
            <NavBar handleModalToggle={this.handleModalToggle} modalOpen={this.state.modalOpen}/>
            <div>
              { this.props.children }
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='*' component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('app')
)
