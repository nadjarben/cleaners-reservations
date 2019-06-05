import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FormattedMessage } from 'react-intl'; 


const NavItems = () => {
    
    return (
      <div>
                <NavItem className="navitem">
                    <Link to="/reservation" className="navMenu">
                      <FormattedMessage id="nav.reservation" defaultMessage="Reservation"/>
                    </Link>
                </NavItem>
                <NavItem className="navitem">
                      <Link to="/tarifs" className="navMenu">
                        <FormattedMessage id="nav.prices" defaultMessage="Prices"/>
                      </Link>
                </NavItem>
                <NavItem className="navitem">
                    <Link to="/contacts" className="navMenu">
                      <FormattedMessage id="nav.contacts" defaultMessage="Contacts"/>
                    </Link>
                </NavItem>
        </div>
    );
  }


export default NavItems