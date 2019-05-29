import React, { Component } from 'react';
import './Home.css';
import logo from '../images/logo-min.png';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'; 
import NavBar from '../components/NavBar';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
            <div className="Home">
                <div className="text-center">
                <img className="logo" src={logo} alt="logoCleaners"></img>
                </div>
				<p className="lead text-center"><FormattedMessage id="home.intro" defaultMessage=""/></p>
				<div className="text-center">
                <Link to="/reservation">
                    <button className="bouton18">
        
                            <p className="text-button"><FormattedMessage id="home.button" defaultMessage="BOOK A DELIVERY"/></p>
                            </button>
                        </Link>
                </div>
            </div>
            </div>
        );
    }
}

export default Home