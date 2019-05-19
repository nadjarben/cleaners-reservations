import React, { Component } from 'react';
import './Home.css';
import logo from '../images/logo-min.png';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'; 
class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img className="logo" src={logo} alt="logoCleaners"></img>
				<p className="lead text-center"><FormattedMessage id="home.intro" defaultMessgae=""/></p>
				<div className="text-center">
                    <button className="bouton18">
                        <Link to="/reservation">
                            <p className="text-button"><FormattedMessage id="home.button" defaultMessgae="BOOK A DELIVERY"/></p>
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Home