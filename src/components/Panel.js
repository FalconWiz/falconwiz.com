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
      >
        This is a pretty neat panel
      </Panel>
    )
  }
}

export default ReactPanel
