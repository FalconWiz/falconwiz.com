import React from 'react'

class SiteWrapper extends React.Component {
  render () {
    return (
      <div className='site-wrapper'>
        <div className='site-wrapper-inner'>
          <div className='cover-container'>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default SiteWrapper
