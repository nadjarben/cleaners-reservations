import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import flag from '../images/flag.png';
import flaghe from '../images/flag-he.png';
import flagen from '../images/flag-en.png';
import flagfr from '../images/flag-fr.png';
import './NavBar.css';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
 } from 'reactstrap';
 import { FormattedMessage } from 'react-intl'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocale } from '../store/actions/localeActions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleDrop() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="NavBar">
        <Navbar color="red" className="navbar-dark navbar-expand-sm">
          <NavbarBrand><Link className="title" to="/home">THE CLEANERS</Link></NavbarBrand>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop} className="dropdown">
        <DropdownToggle caret className="dropdown">
        <img src={flag} alt="flag" width="25px" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
          <div className="flag" onClick={() => this.props.setLocale('en')} >
              <img src={flagen} alt="flagen" width="30px" /> English
            </div>
          </DropdownItem>
          <DropdownItem>
          <div className="flag" onClick={() => this.props.setLocale('fr')} >
              <img src={flagfr} alt="flagfr" width="30px" /> Francais
            </div>
          </DropdownItem>
          <DropdownItem>
          <div className="flag" onClick={() => this.props.setLocale('he')} >
              <img src={flaghe} alt="flaghe" width="30px" /> עברית
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
          <Link to="/home"><img src={logo1} alt="logo1" className="logo1"/></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink onClick={this.toggle}><Link to="/admin" className="navMenu">Admin</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle}>
                  <Link to="/reservation" className="navMenu">
                    <FormattedMessage id="nav.reservation" defaultMessgae="Reservation"/>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle}>
                    <Link to="/tarifs" className="navMenu">
                      <FormattedMessage id="nav.prices" defaultMessgae="Prices"/>
                    </Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle}>
                  <Link to="/contacts" className="navMenu">
                    <FormattedMessage id="nav.contacts" defaultMessgae="Contacts"/>
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  setLocale: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  setLocale: state.locale
});

export default connect(mapStateToProps, {setLocale})(NavBar)