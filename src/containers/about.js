import { Component } from 'jumpsuit'
import Avatar from './../components/avatar'
import Bio from './../components/bio'

const About = Component({
  render () {
    return (
      <div id='about'>
        <Avatar />
        <Bio />
      </div>
    )
  }
})

export default About
