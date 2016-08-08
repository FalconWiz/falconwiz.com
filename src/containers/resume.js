import { Component, Link } from 'jumpsuit'
import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, Row, Col } from 'reactstrap'
import ModalState from './../state/modal'

const Resume = Component({
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={ () => ModalState.toggle() }>
        <ModalHeader toggle={ () => ModalState.toggle() }>
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
                  <a href="https://drive.google.com/open?id=0B0AAc53wAuodY1dmRGhsV1Mya3c" target="_blank">
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
          <Button color="primary" onClick={ () => ModalState.toggle() }>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}, (state) => ({
  modal: state.modal.open
}))

export default Resume
