import { Component } from 'jumpsuit'
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBlock, Container, Row, Col } from 'reactstrap'
const socialCards = Component({
  render () {
    return (
      <CardDeck>
        <Card block className="text-xs-center">
          <CardTitle>
            Github
          </CardTitle>
          <CardText>
            <i className="fa fa-github-square fa-4x" aria-hidden="true"></i>
          </CardText>
          <CardText>
            Check out my projects on Github!
          </CardText>
        </Card>
        <Card block className="text-xs-center">
          <CardTitle>
            LinkedIn
          </CardTitle>
          <CardText>
            <i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
          </CardText>
          <CardText>
            Peep my profile!
          </CardText>
        </Card>
        <Card block className="text-xs-center">
          <CardTitle>
            Instagram
          </CardTitle>
          <CardText>
            <i className="fa fa-instagram fa-4x" aria-hidden="true"></i>
          </CardText>
          <CardText>
            Sometimes I take photos and put them here!
          </CardText>
        </Card>
        <Card block className="text-xs-center">
          <CardTitle>
            Email
          </CardTitle>
          <CardText>
            <i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i>
          </CardText>
          <CardText>
            Feel free to contact me via email!
          </CardText>
        </Card>
      </CardDeck>
    )
  }
})

export default socialCards
