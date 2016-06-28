import React from 'react'

import Header from './Header'
import ReactPanel from './Panel'
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
        <ReactPanel />
        <Footer />
      </div>
    )
  }
}

export default Main
