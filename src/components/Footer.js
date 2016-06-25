import React from 'react'

class Footer extends React.Component {
  render () {
    let date = new Date().getFullYear()
    return (
      <footer>
        <p>&copy; FalconWiz {date}</p>
      </footer>
    )
  }
}

export default Footer
