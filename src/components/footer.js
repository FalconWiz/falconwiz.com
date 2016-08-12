import { Component } from 'jumpsuit'

const Footer = Component({
  render() {
    let date = new Date().getFullYear()
    return (
      <footer>
        <p>
          &copy; {date} FalconWiz
        </p>
      </footer>
    )
  }
})

export default Footer
