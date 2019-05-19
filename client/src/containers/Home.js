import React, { Component } from 'react';
import './Home.css';
import logo from '../images/logo-min.png';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img className="logo" src={logo} alt="logoCleaners"></img>
				<p className="lead text-center">Situé à Ashdod, le pressing The Cleaners met ses services à votre disposition dans la gestion de vos vêtements et votre linge. Nous avons à cœur la satisfaction de nos clients et leur proposons des services de lavage et de repassage adaptés à leur besoin. Vous n’avez plus à vous soucier de votre linge, nous nous en chargeons à votre place et à des prix imbattables.</p>
				<div className="text-center"><button className="bouton18"><Link to="/reservation"><p className="text-button">RESERVEZ UNE LIVRAISON</p></Link></button></div>
            </div>
        );
    }
}

export default Home