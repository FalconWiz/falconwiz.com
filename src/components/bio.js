import { Component } from 'jumpsuit'

const Bio = Component({
  render () {
    return (
      <div id="bio">
        <h2 className="text-xs-center">
          Who am I?
        </h2>
        <p className="text-xs-center">
          Hello! I'm Andrew, just a regular human who loves to learn about (and build things with) new and exciting technologies!
        </p>
      </div>
    )
  }
})

export default Bio
