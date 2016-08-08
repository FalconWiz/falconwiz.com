import { Component } from 'jumpsuit'

import Avatar from './../components/avatar'
import Titles from './../components/titles'
import SocialCards from './../components/socialCards'

const Home = Component({
  render () {
    return (
      <div>
        <Avatar />
        <Titles />
        <SocialCards />
      </div>
    )
  }
})

export default Home
