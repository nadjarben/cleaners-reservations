import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../images/logo1.png';
import './NavBar.css';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
 import GoogleAuth from './GoogleAuth';
import Languages from './Languages';
import Admin from './Admin';
import NavItems from './NavItems';

class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <div className="NavBar">
          <Navbar className="navbar-dark navbar-expand-sm" color="red">
            <Link className="title" to="/home">
              THE CLEANERS
            </Link>
            <Languages />
          <Link to="/home">
            <img src={logo1} alt="logo1" className="logo1"/>
          </Link>
            <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <Admin />
                  <NavItems onClick={this.toggle} /> 
                </Nav>
              </Collapse>
          </Navbar>
        </div>
        <div className="sign">
          <GoogleAuth className="signin" />
        </div>
      </div>
    );
  }
}


export default NavBar