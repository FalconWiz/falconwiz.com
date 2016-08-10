import { Component } from 'jumpsuit'

const Footer = Component({
  render() {
    let date = new Date().getFullYear()
    return (
      <footer>
        <p>
          &copy; FalconWiz {date}
        </p>
      </footer>
    )
  }
})

export default Footer
