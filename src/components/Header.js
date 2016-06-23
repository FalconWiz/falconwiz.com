import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className='masthead clearfix'>
        <div className='inner'>
          <h3 className='masthead-brand'>FalconWiz.com</h3>
          <nav className='nav nav-masthead'>
            <a className='nav-link' title='Email me!' href='mailto:andrew.hinett@gmail.com' target='_blank'><i className='fa fa-envelope-o fa-lg' aria-hidden='true'></i></a>
            <a className='nav-link' title='Github' href='https://github.com/FalconWiz' target='_blank'><i className='fa fa-github fa-lg' aria-hidden='true'></i></a>
            <a className='nav-link' title='Instagram' href='https://www.instagram.com/hinett.a' target='_blank'><i className='fa fa-instagram fa-lg' aria-hidden='true'></i></a>
            <a className='nav-link' title='Linkedin' href='https://ca.linkedin.com/in/andrew-hinett' target='_blank'><i className='fa fa-linkedin fa-lg' aria-hidden='true'></i></a>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
