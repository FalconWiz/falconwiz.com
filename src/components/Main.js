import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import VideoPlayer from './VideoPlayer'
import 'bootstrap/dist/css/bootstrap.css'

const falconwizCss = require('../css/falconwiz.css') // eslint-disable-line no-unused-vars

class Main extends React.Component {
  render () {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <VideoPlayer />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main
