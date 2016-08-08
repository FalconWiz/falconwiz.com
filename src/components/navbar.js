import { Component } from 'jumpsuit'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const NavBar = Component({
  render() {
    return (
      <div>
        <Navbar full>
          <NavbarBrand href="/">FalconWiz.com</NavbarBrand>
          <Nav className="pull-xs-right" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">Resume</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
})

export default NavBar
