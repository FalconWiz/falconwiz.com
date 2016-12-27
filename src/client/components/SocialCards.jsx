import React from 'react'
import { Card, CardTitle, CardText, CardDeck } from 'reactstrap'

export default class SocialCards extends React.Component {
  render () {
    return (
      <CardDeck>
        <Card block className="text-xs-center">
          <CardTitle>
            Github
          </CardTitle>
          <CardText>
            <a href="https://github.com/FalconWiz" target="_blank">
              <i className="fa fa-github-square fa-4x" aria-hidden="true"></i>
            </a>
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
            <a href="https://ca.linkedin.com/in/andrew-hinett" target="_blank">
              <i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
            </a>
          </CardText>
          <CardText>
            Join my professional network!
          </CardText>
        </Card>
        <Card block className="text-xs-center">
          <CardTitle>
            Instagram
          </CardTitle>
          <CardText>
            <a href="https://www.instagram.com/hinett.a/" target="_blank">
              <i className="fa fa-instagram fa-4x" aria-hidden="true"></i>
            </a>
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
            <a href="mailto:andrew.hinett@gmail.com" target="_blank">
              <i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i>
            </a>
          </CardText>
          <CardText>
            Feel free to contact me about exciting opportunities!
          </CardText>
        </Card>
      </CardDeck>
    )
  }
}
