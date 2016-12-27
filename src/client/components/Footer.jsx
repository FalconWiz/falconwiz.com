import React from 'react'

export default class Footer extends React.Component {
  render () {
    let date = new Date().getFullYear()
    return (
      <footer>
        <p>
          &copy; {date} FalconWiz
        </p>
      </footer>
    )
  }
}
