import React from 'react'

import Avatar from './Avatar.jsx'
import Titles from './Titles.jsx'
import SiteDetails from './SiteDetails.jsx'
import SocialCards from './SocialCards.jsx'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Avatar />
        <Titles />
        <SiteDetails />
        <SocialCards />
      </div>
    )
  }
}
