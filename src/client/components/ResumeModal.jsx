import React from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, Row, Col } from 'reactstrap'

export default class ResumeModal extends React.Component {
  handleModalToggle = () => {
    this.props.handleModalToggle()
  }
  render () {
    return (
      <Modal isOpen={this.props.modalOpen} toggle={ this.props.handleModalToggle }>
        <ModalHeader toggle={ this.props.handleModalToggle }>
          Resume Options
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col sm="6">
              <Card className="text-xs-center" block>
                <CardTitle>
                  Google Drive Link
                </CardTitle>
                <CardText>
                  <a href="https://drive.google.com/open?id=0B0AAc53wAuodTlZtSHJLbEh6R1U" target="_blank">
                    <i className="fa fa-google fa-4x" aria-hidden="true"></i>
                  </a>
                </CardText>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="text-xs-center" block>
                <CardTitle>
                  Local PDF
                </CardTitle>
                <CardText>
                  <a href="resume/andrew-hinett-resume.pdf" target="_blank">
                    <i className="fa fa-file-pdf-o fa-4x" aria-hidden="true"></i>
                  </a>
                </CardText>
              </Card>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ this.props.handleModalToggle }>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}
