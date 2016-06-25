import React from 'react'

class Jumbotron extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        { this.props.children }
      </div>
    )
  }
}

export default Jumbotron
