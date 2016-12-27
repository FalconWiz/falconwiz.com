import React from 'react'

import Avatar from './Avatar.jsx'
import Bio from './Bio.jsx'

export default class About extends React.Component {
  render () {
    return (
      <div id='about'>
        <Avatar />
        <Bio />
      </div>
    )
  }
}
