import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import 'bootstrap/dist/css/bootstrap.css'

const falconwizCss = require('../css/falconwiz.css') // eslint-disable-line no-unused-vars

class Main extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <Footer />
      </div>
    )
  }
}

export default Main
