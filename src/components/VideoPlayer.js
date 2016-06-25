import React from 'react'

class VideoPlayer extends React.Component {
  render () {
    const style = {
      height: '90%',
      width: '90%'
    }
    return (
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='imbed-responsive-item' id='video' style={style} src='https://www.youtube.com/embed/SAxpAs1Iaec?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe>
      </div>
    )
  }
}

export default VideoPlayer
