import React from 'react'

import Header from './Header'
import Jumbotron from './Jumbotron'
import VideoPlayer from './VideoPlayer'
import Footer from './Footer'

// Bootstrap / Style things
global.jQuery = require('jquery')
global.Tether = require('tether')
require('bootstrap')
require('./../css/falconwiz.scss')

class Main extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Jumbotron>
          <VideoPlayer />
        </Jumbotron>
        <Footer />
      </div>
    )
  }
}

export default Main
