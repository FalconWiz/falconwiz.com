import React from 'react'

import SiteWrapper from './SiteWrapper'
import Header from './Header'
import InnerCover from './InnerCover'
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
      <SiteWrapper>
        <Header />
        <InnerCover>
          <VideoPlayer />
        </InnerCover>
        <Footer />
      </SiteWrapper>
    )
  }
}

export default Main
