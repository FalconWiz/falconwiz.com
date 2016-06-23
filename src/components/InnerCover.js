import React from 'react'

class InnerCover extends React.Component {
  render () {
    return (
      <div className='inner cover'>
        <h1 className='cover-heading'>How I feel when I'm learning new tech...</h1>
        { this.props.children }
      </div>
    )
  }
}

export default InnerCover
