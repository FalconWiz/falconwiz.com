import React from 'react'

class Footer extends React.Component {
  render () {
    let date = new Date().getFullYear()
    return (
      <div className='mastfoot'>
        <div className='inner'>
          <p>&copy; FalconWiz {date}</p>
        </div>
      </div>
    )
  }
}

export default Footer
