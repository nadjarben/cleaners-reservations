import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import flaghe from '../images/flag-he.png';
import flagen from '../images/flag-en.png';
import flagfr from '../images/flag-fr.png';
import './NavBar.css';
import {
  Collapse, Navbar, NavbarToggler,
  Nav, NavItem,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
 } from 'reactstrap';
 import { FormattedMessage } from 'react-intl'; 
 import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocale } from '../store/actions/localeActions';

class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
    };
  }
  
  changeFlag() {
    const lang = this.props.lang
    if(lang === 'he') {
      return (
        <img src={flaghe} alt="flag" width="25px" />
      )
    }
      if(lang === 'en') {
        return (
          <img src={flagen} alt="flag" width="25px" />
        )
      }
        if(lang === 'fr') {
          return (
            <img src={flagfr} alt="flag" width="25px" />
        )
    }
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
          <Link className="title" to="/home">THE CLEANERS</Link>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop} className="dropdown">
        <DropdownToggle caret className="droptoggle">
        {this.changeFlag()}
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
            <NavItem className="navitem">
                <Link to="/admin" className="navMenu" onClick={this.toggle}>Admin</Link>
              </NavItem>
              <NavItem className="navitem">
                  <Link to="/reservation" className="navMenu" onClick={this.toggle}>
                    <FormattedMessage id="nav.reservation" defaultMessgae="Reservation"/>
                  </Link>
              </NavItem>
              <NavItem className="navitem">
                    <Link to="/tarifs" className="navMenu" onClick={this.toggle}>
                      <FormattedMessage id="nav.prices" defaultMessgae="Prices"/>
                    </Link>
              </NavItem>
              <NavItem className="navitem">
                  <Link to="/contacts" className="navMenu" onClick={this.toggle}>
                    <FormattedMessage id="nav.contacts" defaultMessgae="Contacts"/>
                  </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  lang: propTypes.string.isRequired
}

const mapStateToProps = state => ({
  setLocale: state.locale,
  lang: state.locale.lang
});

export default connect(mapStateToProps, {setLocale})(NavBar)