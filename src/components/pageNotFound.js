import { Component } from 'jumpsuit'
import { Button } from 'reactstrap'

const PageNotFound = Component({
  render () {
    return (
      <div id="pageNotFound">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">
              Oh no, this page doesn't exist!
            </h1>
            <p className="lead">
              I'm sure you can find your own way back :)
            </p>
          </div>
        </div>
      </div>
    )
  }
})

export default PageNotFound
