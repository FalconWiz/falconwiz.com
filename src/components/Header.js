import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-static-top navbar-dark bg-inverse'>
        <a className='navbar-brand' href='#'>FalconWiz.com</a>
        <ul className='nav navbar-nav pull-xs-right'>
          <li className='nav-item'>
            <a className='nav-link' title='Email me!' href='mailto:andrew.hinett@gmail.com' target='_blank'><i className='fa fa-envelope-o fa-lg' aria-hidden='true'></i></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' title='Github' href='https://github.com/FalconWiz' target='_blank'><i className='fa fa-github fa-lg' aria-hidden='true'></i></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' title='Instagram' href='https://www.instagram.com/hinett.a' target='_blank'><i className='fa fa-instagram fa-lg' aria-hidden='true'></i></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' title='Linkedin' href='https://ca.linkedin.com/in/andrew-hinett' target='_blank'><i className='fa fa-linkedin fa-lg' aria-hidden='true'></i></a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
