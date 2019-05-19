import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import './NavBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="NavBar">
        <Navbar color="dark" className="navbar-dark navbar-expand-sm">
          <NavbarBrand><Link className="title" to="/">THE CLEANERS</Link></NavbarBrand>
          <Link to="/"><img src={logo1} alt="logo1" className="logo1" /></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink onClick={this.toggle}><Link to="/admin" className="navMenu">Admin</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle}><Link to="/reservation" className="navMenu">Reservation</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle}><Link to="/tarifs" className="navMenu">Tarifs</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle}><Link to="/contacts" className="navMenu">Contacts</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}