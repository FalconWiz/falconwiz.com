import { Component, Link } from 'jumpsuit'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { LinkContainer } from 'react-router'
import Resume from './../containers/resume'
import ModalState from './../state/modal'

const NavBar = Component({
  render() {
    return (
      <div>
        <Navbar full>
          <NavbarBrand href="/">Andrew Hinett</NavbarBrand>
          <Nav className="pull-xs-right" navbar>
            <NavItem>
              <Link className="nav-link" to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/about'>About</Link>
            </NavItem>
            <NavItem>
              <a className='nav-link' onClick={() => ModalState.toggle()} href='#'>Résumé</a>
            </NavItem>
          </Nav>
        </Navbar>
        <Resume />
      </div>
    )
  }
})

export default NavBar
