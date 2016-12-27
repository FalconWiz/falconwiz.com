import React from 'react'
import { Link } from 'react-router'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import ResumeModal from './ResumeModal.jsx'

export default class NavBar extends React.Component {
  render () {
    return (
      <div>
        <Navbar full>
          <NavbarBrand href="/">Andrew Hinett</NavbarBrand>
          <Nav className="pull-right" navbar>
            <NavItem>
              <Link className="nav-link" to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/about'>About</Link>
            </NavItem>
            <NavItem>
              <a className='nav-link' onClick={this.props.handleModalToggle} href='#'>Resume</a>
            </NavItem>
          </Nav>
        </Navbar>
        <ResumeModal modalOpen={this.props.modalOpen} handleModalToggle={this.props.handleModalToggle}/>
      </div>
    )
  }
}
