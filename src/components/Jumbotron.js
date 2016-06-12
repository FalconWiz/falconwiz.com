import React from 'react'

class Jumbotron extends React.Component {
  render () {
    const iframeStyles = {
      width: '100%',
      height: '100%'
    }
    return (
      <div className='jumbotron vertical-center'>
       <div className='container'>
         <iframe style={iframeStyles} width='100%' height='100%' id='video' src='https://www.youtube.com/embed/SAxpAs1Iaec?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe>
       </div>
      </div>
    )
  }
}

export default Jumbotron
