import React from 'react'
import Panel from 'react-bootstrap/lib/Panel'

class ReactPanel extends React.Component {
  handleClick () {
    window.alert('Wow, you clicked the panel! :3')
  }
  render () {
    return (
      <Panel
        onClick={this.handleClick.bind(this)}
        bsStyle='primary'
        header='This is the panel header! :3'
      >
        This is a pretty neat panel!
      </Panel>
    )
  }
}

export default ReactPanel
